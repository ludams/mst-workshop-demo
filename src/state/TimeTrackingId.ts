import { types } from "mobx-state-tree";

export const TimeTrackingIdModel = types.model({
  id: types.identifier,
  name: types.string,
});