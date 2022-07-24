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
    <div className={"flex items-center justify-center h-screen"}>
      <div className={"flex items-center justify-center bg-green"}>
        <TimeTrackingIdList timeTrackingIds={timeTrackingIds}/>
        <TrackingTimer/>
        <TrackHistory/>
      </div>
    </div>
  )
}
