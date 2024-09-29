import React from "react";
import { HistoryItem } from "./HistoryItem";
import { store } from "../state/TimeTrackingStore";
import { observer } from "mobx-react-lite";
import { Container } from './Container';

export const TrackHistory: React.FC = observer(() => {
  return (
    <Container className={"flex-1 bg-yellow-200"}>
      <h2 className={"text-lg font-medium mb-2"}>💾 Track History</h2>
      <ul className={"overflow-auto w-full"}>
        {store.trackHistoryCompleted.map(historyItem => (
          <HistoryItem historyItem={historyItem}/>
        ))}
      </ul>
    </Container>
  );
});