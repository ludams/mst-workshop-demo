import { useEffect } from 'react'
import { TimeTrackingIdList } from "./components/TimeTrackingIdList";
import { TrackingTimer } from "./components/TrackingTimer";
import { TrackHistory } from "./components/TrackHistory";
import { store } from "./state/TimeTrackingStore";
import { observer } from "mobx-react-lite";

export type TimeTrackingIdType = {
  id: string;
  name: string;
};

export const App = observer(() => {
  useEffect(() => {
    store.fetchTrackingIds()
  }, [])

  return (
    <div className={"app bg-orange-50"}>
      <h1 className={"title mb-4"}>⏳ The Time Tracking Demo</h1>
      <div className={"app-children"}>
        <TimeTrackingIdList timeTrackingIds={store.timeTrackingIds}/>
        <div className={"flex flex-col h-full"}>
          <TrackingTimer/>
          <TrackHistory/>
        </div>
      </div>
    </div>
  )
});
