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
    <div className={"app"}>
      <h1 className={"title"}>⏳ The Time Tracking Demo</h1>
      <div className={"app-children"}>
        <TimeTrackingIdList timeTrackingIds={store.timeTrackingIds}/>
        <div className={"right-side"}>
          <TrackingTimer/>
          <TrackHistory/>
        </div>
      </div>
    </div>
  )
});
