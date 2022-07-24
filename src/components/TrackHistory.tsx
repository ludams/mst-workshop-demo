import React from "react";
import { HistoryItem } from "./HistoryItem";

export const TrackHistory: React.FC = () => {
  return (
    <div>
      <ul>
        <HistoryItem/>
      </ul>
    </div>
  );
};