import { flow, getEnv, Instance, SnapshotIn, types } from "mobx-state-tree";
import { TimeTrackingIdModel } from "./TimeTrackingId";
import { TrackHistoryItemModel } from "./TrackHistoryItem";
import { TimeTrackingIdDto, TimeTrackingService } from "../services/TimeTrackingService";

export const TimeTrackingStoreModel = types
  .model('TimeTrackingStore', {
    isPending: false,
    timeTrackingIds: types.array(TimeTrackingIdModel),
    trackHistory: types.array(TrackHistoryItemModel)
  })
  .views(self => ({
    get lastHistoryItem() {
      if (self.trackHistory.length > 0) {
        return self.trackHistory[self.trackHistory.length - 1]
      }
      return undefined
    },
    get isTimerRunning() {
      return this.lastHistoryItem && !this.lastHistoryItem?.endTime
    },
    get trackHistoryCompleted() {
      if (this.isTimerRunning) {
        return self.trackHistory.slice(0, -1)
      }
      return self.trackHistory
    }
  }))
  .actions(self => ({
    addTimeTrackingId(name: string) {
      self.timeTrackingIds.push({
        name,
        id: self.timeTrackingIds.length.toString()
      });
    },
    startTrackingProgress(timeTrackingId: TimeTrackingIdInstance) {
      if (self.isTimerRunning) {
        self.lastHistoryItem!.endTime = new Date()
      }
      self.trackHistory.push({
        trackingId: timeTrackingId.id,
        startTime: new Date(),
        endTime: null
      })
    },
    stopTrackingProgress() {
      self.trackHistory[self.trackHistory.length - 1].endTime = new Date()
    },
    fetchTrackingIds: flow(function*() {
      const timeTrackingService = getEnv<DependencyEnv>(self).timeTrackingService;
      self.isPending = true
      const fetchResult: TimeTrackingIdDto[] = yield timeTrackingService.fetchAllTrackingIds()
      self.timeTrackingIds.replace(fetchResult.map(trackingId => ({ ...trackingId, id: trackingId.id.toString() })))
      self.isPending = false
    })
  }));

interface TimeTrackingIdInput extends SnapshotIn<typeof TimeTrackingIdModel> {}
interface TimeTrackingIdInstance extends Instance<typeof TimeTrackingIdModel> {}

type DependencyEnv = {
  timeTrackingService: TimeTrackingService
}

export const store = TimeTrackingStoreModel.create({
  timeTrackingIds: [
    // { id: "0", name: "Debug"},
    // { id: "1", name: "Write Documentation"},
    // { id: "2", name: "Implement Feature"},
    // { id: "3", name: "Attend Meeting"},
    // { id: "4", name: "Prepare Workshop"},
  ]
}, {
  timeTrackingService: new TimeTrackingService()
} as DependencyEnv)