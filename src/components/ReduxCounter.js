import React, {useReducer} from 'react';
import {useDispatch} from "react-redux";
import ReduxCountPanel from "./ReduxCountPanel";

const ReduxCounter = () => {

    const dispatch = useDispatch()

    const inc = () => {
        dispatch({type:'INC'})
    }
    const dec = () => {
        dispatch({type:'DEC'})
    }

    return (
        <div>
            <ReduxCountPanel></ReduxCountPanel>
            <button onClick={() => inc()}>++</button>
            <button onClick={() => dec()}>--</button>
        </div>
    );
};

export default ReduxCounter;