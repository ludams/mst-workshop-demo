import React from "react";
import { TimeTrackingIdType } from "../App";

type Props = {
  timeTrackingIds: TimeTrackingIdType[]
}

export const TimeTrackingIdList: React.FC<Props> = (props) => {
    return (
      <div className={"time-tracking-id-list"}>
        <h2 className={"heading"}>🏷 Time Tracking IDs</h2>
        <ul className={"overflow-auto"}>
          {props.timeTrackingIds.map(timeTrackingId => (
            <li className={"time-tracking-id"}>
              <button>{timeTrackingId.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
};