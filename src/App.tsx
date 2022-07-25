import { useState } from 'react'
import { TimeTrackingIdList } from "./components/TimeTrackingIdList";
import { TrackingTimer } from "./components/TrackingTimer";
import { TrackHistory } from "./components/TrackHistory";

export type TimeTrackingIdType = {
  id: string;
  name: string;
};

export const App = () => {
  const [timeTrackingIds] = useState([
    { id: '0', name: "Debug"},
    { id: '1', name: "Write Documentation"},
    { id: '2', name: "Implement Feature"},
    { id: '3', name: "Attend Meeting"},
    { id: '4', name: "Prepare Workshop"},
  ])

  return (
    <div className={"app"}>
      <h1 className={"title"}>⏳ The Time Tracking Demo</h1>
      <div className={"app-children"}>
        <TimeTrackingIdList timeTrackingIds={timeTrackingIds}/>
        <div className={"right-side"}>
          <TrackingTimer/>
          <TrackHistory/>
        </div>
      </div>
    </div>
  )
};
