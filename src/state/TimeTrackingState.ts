import { Instance, SnapshotIn, types } from "mobx-state-tree";
import { TimeTrackingId } from "./models/TimeTrackingId";

export const TimeTrackingStateModel = types
  .model({
    timeTrackingIdList: types.array(TimeTrackingId),
    trackingTimer: types.model({
      isRunning: false,
      selectedTrackingId: types.safeReference(TimeTrackingId),
    }),
  })
  .actions(self => ({
    addTimeTrackingId(timeTrackingId: TimeTrackingIdInput) {
      self.timeTrackingIdList.push(timeTrackingId);
    },
    startTrackingTimer(timeTrackingId: TimeTrackingInstance) {
      self.trackingTimer.selectedTrackingId = timeTrackingId;
      self.trackingTimer.isRunning = true;
    }
  }));

interface TimeTrackingIdInput extends SnapshotIn<typeof TimeTrackingId> {}
interface TimeTrackingId extends Instance<typeof TimeTrackingId> {}

export const createInitialMockStore = () => TimeTrackingStateModel.create({
  timeTrackingIdList: [
    { id: "0", name: "Debug"},
    { id: "1", name: "Write Documentation"},
    { id: "2", name: "Implement Feature"},
    { id: "3", name: "Attend Meeting"},
    { id: "4", name: "Prepare Workshop"},
  ]
})