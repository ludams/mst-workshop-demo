import React from "react";

export const TrackingTimer: React.FC = () => {
  return (
    <div className={"container mb-4"}>
      <h2 className={"heading"}>⏱ Tracking Timer</h2>
      <p>Currently running: </p>
      <button>Start/Stop</button>
    </div>
  );
};