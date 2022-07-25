import React, { useState } from "react";
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
        <AddTrackingId/>
      </div>
    );
});

const AddTrackingId = observer(() => {
  const [value, setValue] = useState<string>('');

  const onClick = () => {
    store.addTimeTrackingId(value)
    setValue('')
  }

  return (
    <div className={"add-tracking-d"}>
      <input
        className={'input'}
        value={value}
        onChange={(event) => setValue(event.target.value)}/>
      <button onClick={onClick} className={"add-button"}>Add</button>
    </div>
  )
})