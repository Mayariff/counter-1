import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";



 function App() {
    //значения цифр на дисплее
    let [value, setValue] = useState<null | number>(0)

    //активная или не активная кнопка
    let [disabled, setDisabled] = useState<boolean>(false)

    //максимально возможное число при нажатии на inc
    const maxValue = 5;

    // функция ,изменяющая цифры на дисплее при нажатии на inc
    function changeValue(value: null | number) {
        value ? value = value + 1 : value = 1;
        if (value >= maxValue) {
            setDisabled(true)
        }
        setValue(value);
    }

    // функция ,сбрасывающая  цифры на дисплее при нажатии на reset
    function resetValue() {
        value = 0;
        setValue(value);
        setDisabled(false)
    }

    return (
        <div className={"App"}>
            <Counter value={value}
                     changeValue={changeValue}
                     resetValue={resetValue}
                     disabled={disabled}
                     maxValue={maxValue}/>
        </div>
    );
}

export default App;
