import { types } from "mobx-state-tree";

export const TimeTrackingId = types.model({
  id: types.identifier,
  name: types.string,
}).actions(self => ({
  rename(newName: string) {
    self.name = newName;
  }
}))