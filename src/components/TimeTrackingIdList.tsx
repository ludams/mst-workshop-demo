import React from "react";
import { TimeTrackingId } from "../App";

type Props = {
  timeTrackingIds: TimeTrackingId[]
}

export const TimeTrackingIdList: React.FC<Props> = (props) => {
    return (
      <div>
        <ul>
          {props.timeTrackingIds.map(timeTrackingId => (
            <li><button>{timeTrackingId.name}</button></li>
          ))}
        </ul>
      </div>
    );
};