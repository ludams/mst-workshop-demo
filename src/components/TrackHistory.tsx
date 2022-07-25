import React from "react";
import { HistoryItem } from "./HistoryItem";
import { store } from "../state/TimeTrackingStore";
import { observer } from "mobx-react-lite";

export const TrackHistory: React.FC = observer(() => {
  return (
    <div className={"track-history"}>
      <h2 className={"heading"}>💾 Track History</h2>
      <ul className={"overflow-auto"}>
        {store.trackHistoryCompleted.map(historyItem => (
          <HistoryItem historyItem={historyItem}/>
        ))}
      </ul>
    </div>
  );
});