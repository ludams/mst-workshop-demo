import React from "react";
import { TimeTrackingId } from "../App";

type Props = {
  timeTrackingIds: TimeTrackingId[]
}

export const TimeTrackingIdList: React.FC<Props> = (props) => {
    return (
      <div className={"container mr-4 bg-blue-200"}>
        <h2 className={"heading"}>🏷 Time Tracking IDs</h2>
        <ul className={"overflow-auto"}>
          {props.timeTrackingIds.map(timeTrackingId => (
            <li className={"px-2 py-1 mb-1 rounded-xl bg-blue-100"}><button>{timeTrackingId.name}</button></li>
          ))}
        </ul>
      </div>
    );
};