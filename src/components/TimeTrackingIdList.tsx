import React, { useState } from "react";
import { TimeTrackingIdType } from "../App";
import { TimeTrackingId } from "./TimeTrackingId";
import { observer } from "mobx-react-lite";
import { store } from "../state/TimeTrackingStore";
import { Container } from './Container';

type Props = {
  timeTrackingIds: TimeTrackingIdType[]
}

export const TimeTrackingIdList: React.FC<Props> = observer((props) => {
    return (
      <Container className={"mr-4 bg-blue-200"}>
        <h2 className={"text-lg font-medium mb-2"}>🏷 Time Tracking IDs</h2>
        <ul className={"overflow-auto"}>
          {store.isPending && store.timeTrackingIds.length == 0 && (
            <p>Loading...</p>
          )}
          {props.timeTrackingIds.map(timeTrackingId => (
            <TimeTrackingId timeTrackingId={timeTrackingId}/>
          ))}
        </ul>
        <AddTrackingId/>
      </Container>
    );
});

const AddTrackingId = observer(() => {
  const [value, setValue] = useState<string>('');

  const onClick = () => {
    store.addTimeTrackingId(value)
    setValue('')
  }

  return (
    <div className={"flex flex-row mt-4"}>
      <input
        className={'border-1 border-black rounded-lg w-32 pl-2'}
        value={value}
        onChange={(event) => setValue(event.target.value)}/>
      <button onClick={onClick} className={"border-1 border-black rounded-lg px-2 py-1 ml-2"}>Add</button>
    </div>
  )
})