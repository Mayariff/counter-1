import './Display.css';
import React, {MouseEvent} from 'react';


type DisplayType = {
    value: null | number
    disabled: boolean
}

export const Display = (props: DisplayType) => {
    return (
        <div className={"display"}>
            <span className={props.disabled ? 'maxValue' : ""}>{props.value} </span>
        </div>
    );
};
