import React from "react";
import { store } from "../state/TimeTrackingStore";
import { observer } from "mobx-react-lite";
import { Container } from './Container';

export const TrackingTimer: React.FC = observer(() => {
  const onClick = () => {
    if (store.isTimerRunning) {
      store.stopTrackingProgress();
    } else if (store.lastHistoryItem?.trackingId) {
      store.startTrackingProgress(store.lastHistoryItem.trackingId)
    }
  }

  return (
    <Container className={"mb-4 bg-red-200"}>
      <h2 className={"text-lg font-medium mb-2"}>⏱ Tracking Timer</h2>
      <div className={"flex flex-row items-center p-2 rounded-xl bg-red-100 w-full"}>
        <button
          className={'flex items-center justify-center rounded-[50%] border-black border-1 w-8 h-8 mr-2 flex-shrink-0'}
          onClick={onClick}
        >
          <span>{store.isTimerRunning ? '■' : '▶'}</span>
        </button>
        <p className={'overflow-hidden truncate'}>{store.lastHistoryItem?.trackingId?.name}</p>
      </div>
    </Container>
  );
});