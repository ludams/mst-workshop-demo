import React from "react";
import { HistoryItem } from "./HistoryItem";

export const TrackHistory: React.FC = () => {
  return (
    <div className={"container flex-1 bg-yellow-200"}>
      <h2 className={"heading"}>💾 Track History</h2>
      <ul className={"overflow-auto"}>
        <HistoryItem name={'Write Documentation'} timeSpanText={'10:10-10:11'} durationText={'80s'}/>
        <HistoryItem name={'Attend Meeting'} timeSpanText={'10:11-12:06'} durationText={'6924s'}/>
      </ul>
    </div>
  );
};