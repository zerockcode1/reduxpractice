import React, {useContext} from 'react';
import {CountContext} from "../App";

const Couter2 = () => {

    const valueObj = 10;//useContext(CountContext)

    console.log(valueObj)

    const change = (amount) => {
        valueObj.change(amount)
    }


    return (
        <div>
            <h1>Counter With Context {valueObj.count}</h1>
            <div>
                <button onClick={() => change(1)}>+</button>
                <button onClick={() => change(-1)}>-</button>
            </div>
        </div>
    );
};

export default Couter2;