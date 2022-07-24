import { useState } from 'react'
import { TimeTrackingIdList } from "./components/TimeTrackingIdList";

type TimeTrackingId = {
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
    <div>
      <TimeTrackingIdList/>
      <CurrentTrackingId/>
      <History/>
    </div>
  )
}
