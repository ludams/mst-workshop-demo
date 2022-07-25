import { Instance, types } from "mobx-state-tree";
import { TimeTrackingIdModel } from "./TimeTrackingId";

export const TrackHistoryItemModel = types.model('HistoryItem', {
  trackingId: types.reference(TimeTrackingIdModel),
  startTime: types.Date,
  endTime: types.maybeNull(types.Date),
}).views(self => ({
  get durationInSeconds() {
    if (self.endTime) {
      return Math.floor((self.endTime.getTime() - self.startTime.getTime()) / 1000)
    }
    return undefined
  },
  get timeSpanText() {
    if (self.endTime) {
      return `${self.startTime.getHours()}:${self.startTime.getMinutes()}-${self.endTime.getHours()}:${self.endTime.getMinutes()}`
    }
    return undefined
  }
}));

export interface TrackHistoryItemInstance extends Instance<typeof TrackHistoryItemModel> {}