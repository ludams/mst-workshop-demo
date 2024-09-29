import { PropsWithChildren } from 'react';

export const Container: React.FC<PropsWithChildren<{ className?: string }>> = (props) => (
    <div className={"flex flex-col items-start p-4 border-black border-1 rounded-xl w-[220px] overflow-hidden " + (props.className ?? "")}>
        {props.children}
    </div>
)