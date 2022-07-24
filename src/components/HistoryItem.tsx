import React from "react";
import { TrackHistoryItemInstance } from "../state/TrackHistoryItem";
import { observer } from "mobx-react-lite";

type Props = {
  historyItem: TrackHistoryItemInstance
}

export const HistoryItem: React.FC<Props> = observer(({ historyItem }) => {
  return (
    <li className={'mb-2 px-2 py-1 rounded-xl bg-yellow-100'}>
      <p>{historyItem.trackingId.name}</p>
      <span className={"pl-4"}>{historyItem.timeSpanText}</span>
      <span className={'ml-4'}>{historyItem.durationInSeconds}s</span>
    </li>
  );
});