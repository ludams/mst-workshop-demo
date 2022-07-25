import React from "react";

export const TrackingTimer: React.FC = () => {
  return (
    <div className={"tracking-timer"}>
      <h2 className={"heading"}>⏱ Tracking Timer</h2>
      <div className={"timer"}>
        <button className={'timer-button'}>
          <span>{false ? '■' : '▶'}</span>
        </button>
        <p className={'timer-name'}>Attend Meeting</p>
      </div>
    </div>
  );
};