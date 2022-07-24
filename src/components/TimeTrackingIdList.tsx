import React from "react";
import { TimeTrackingIdType } from "../App";
import { TimeTrackingId } from "./TimeTrackingId";
import { observer } from "mobx-react-lite";
import { store } from "../state/TimeTrackingStore";

type Props = {
  timeTrackingIds: TimeTrackingIdType[]
}

export const TimeTrackingIdList: React.FC<Props> = observer((props) => {
    return (
      <div className={"container mr-4 bg-blue-200"}>
        <h2 className={"heading"}>🏷 Time Tracking IDs</h2>
        <ul className={"overflow-auto"}>
          {store.isPending && store.timeTrackingIds.length == 0 && (
            <p>Loading...</p>
          )}
          {props.timeTrackingIds.map(timeTrackingId => (
            <TimeTrackingId timeTrackingId={timeTrackingId}/>
          ))}
        </ul>
      </div>
    );
});