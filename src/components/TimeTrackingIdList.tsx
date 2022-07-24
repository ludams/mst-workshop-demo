import React from "react";
import { TimeTrackingId } from "../App";

type Props = {
  timeTrackingIds: TimeTrackingId[]
}

export const TimeTrackingIdList: React.FC<Props> = (props) => {
    return (
      <div className={"container mr-4"}>
        <h2 className={"heading"}>🏷 Time Tracking IDs</h2>
        <ul className={"overflow-auto"}>
          {props.timeTrackingIds.map(timeTrackingId => (
            <li className={"ml-2 pb-1"}><button>{timeTrackingId.name}</button></li>
          ))}
        </ul>
      </div>
    );
};