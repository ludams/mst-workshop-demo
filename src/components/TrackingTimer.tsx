import React from "react";
import { store } from "../state/TimeTrackingStore";
import { observer } from "mobx-react-lite";

export const TrackingTimer: React.FC = observer(() => {
  const onClick = () => {
    if (store.isTimerRunning) {
      store.stopTrackingProgress();
    } else if (store.lastHistoryItem?.trackingId) {
      store.startTrackingProgress(store.lastHistoryItem.trackingId)
    }
  }

  return (
    <div className={"tracking-timer"}>
      <h2 className={"heading"}>⏱ Tracking Timer</h2>
      <div className={"timer"}>
        <button
          className={'timer-button'}
          onClick={onClick}
        >
          <span>{store.isTimerRunning ? '■' : '▶'}</span>
        </button>
        <p className={'timer-name'}>{store.lastHistoryItem?.trackingId?.name}</p>
      </div>
    </div>
  );
});