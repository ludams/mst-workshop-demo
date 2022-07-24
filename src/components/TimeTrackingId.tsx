import React from "react";
import { observer } from "mobx-react-lite";
import { TimeTrackingIdType } from "../App";
import { store } from "../state/TimeTrackingStore";

type Props = {
  timeTrackingId: TimeTrackingIdType
}

export const TimeTrackingId: React.FC<Props> = observer((props) => {
  return (
    <li className={"px-2 py-1 mb-1 rounded-xl bg-blue-100"}>
      <button onClick={() => store.startTrackingProgress(props.timeTrackingId)}>{props.timeTrackingId.name}</button>
    </li>
  );
});