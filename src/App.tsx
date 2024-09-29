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
    <div className={"flex flex-col justify-stretch p-4 rounded-xl border-1 border-black h-[440px] overflow-hidden bg-orange-50"}>
      <h1 className={"text-xl font-medium mb-4"}>⏳ The Time Tracking Demo</h1>
      <div className={"flex flex-row justify-center flex-1 overflow-hidden"}>
        <TimeTrackingIdList timeTrackingIds={store.timeTrackingIds}/>
        <div className={"flex flex-col"}>
          <TrackingTimer/>
          <TrackHistory/>
        </div>
      </div>
    </div>
  )
});
