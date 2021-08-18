import './Counter.css';
import React, {MouseEvent} from 'react';
import {Button} from "../Button/Button";
import {Display} from "./Display/Display";


type CounterType = {
    value: null | number
    changeValue: (value: null | number) => void
    resetValue: () => void
    disabled: boolean
    maxValue: number
}

export const Counter = (props: CounterType) => {

    // функции-обработчики событий, при нажатии на кнопки
    function onClickIncHendler(e: MouseEvent<HTMLButtonElement>) {
        props.changeValue(props.value);}
    function onClickResetHendler(e: MouseEvent<HTMLButtonElement>) {
        props.resetValue()}

    return (
        <div className='conteiner'>
            <div className="counter">
                <Display value={props.value} disabled={props.disabled}/>

                <Button
                    className={props.value === props.maxValue ? "disabled" : ""}
                    onClick={onClickIncHendler}
                    disabled={props.disabled}
                    title={"inc"}/>
                <Button
                    className={!props.value ? "disabled" : ""}
                    onClick={onClickResetHendler}
                    disabled={!props.value}
                    title={"reset"}/>
            </div>
        </div>
    );
}
