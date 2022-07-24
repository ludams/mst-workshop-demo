import { useState } from 'react'
import { TimeTrackingIdList } from "./components/TimeTrackingIdList";
import { TrackingTimer } from "./components/TrackingTimer";
import { TrackHistory } from "./components/TrackHistory";

export type TimeTrackingId = {
  id: number;
  name: string;
};

export function App() {
  const [timeTrackingIds] = useState([
    { id: 0, name: "Debug"},
    { id: 1, name: "Write Documentation"},
    { id: 2, name: "Implement Feature"},
    { id: 3, name: "Attend Meeting"},
    { id: 4, name: "Prepare Workshop"},
  ])

  return (
    <div className={"app bg-orange-50"}>
      <h1 className={"title mb-4"}>⏳ The Time Tracking Demo</h1>
      <div className={"app-children"}>
        <TimeTrackingIdList timeTrackingIds={timeTrackingIds}/>
        <div className={"flex flex-col h-full"}>
          <TrackingTimer/>
          <TrackHistory/>
        </div>
      </div>
    </div>
  )
}
