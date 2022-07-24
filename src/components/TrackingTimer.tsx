import React from "react";

export const TrackingTimer: React.FC = () => {
  return (
    <div className={"container mb-4 bg-red-200"}>
      <h2 className={"heading"}>⏱ Tracking Timer</h2>
      <div className={"p-2 rounded-xl bg-red-100"}>
        <p>Currently running: </p>
        <button>Start/Stop</button>
      </div>
    </div>
  );
};