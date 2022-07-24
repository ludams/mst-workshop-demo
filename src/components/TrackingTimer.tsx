import React from "react";

export const TrackingTimer: React.FC = () => {
  return (
    <div className={"container mb-4 bg-red-200"}>
      <h2 className={"heading"}>⏱ Tracking Timer</h2>
      <div className={"flex flex-row items-center p-2 rounded-xl bg-red-100 w-full"}>
        <button className={'flex items-center justify-center rounded-[50%] border-black border-1 w-8 h-8 mr-2 flex-shrink-0'}>
          <span>{true ? '▶' : '■'}</span>
        </button>
        <p className={'overflow-hidden truncate'}>Attend Meeting</p>
      </div>
    </div>
  );
};