import React from "react";

type Props = {
  name: string;
  timeSpanText: string;
  durationText: string;
}

export const HistoryItem: React.FC<Props> = (props) => {
    return (
      <li className={'mb-2'}>
        <p>{props.name}</p>
        <span className={"pl-4"}>{props.timeSpanText}</span>
        <span className={'ml-4'}>{props.durationText}</span>
      </li>
    );
};