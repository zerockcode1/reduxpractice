import React from 'react';
import {useSelector} from "react-redux";

const ReduxCountPanel = ({num}) => {

    const count = useSelector(state => state.countReducer.count)

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default  ReduxCountPanel;