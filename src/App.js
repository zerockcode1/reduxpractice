import Couter2 from "./components/Couter2";
import {useReducer, useState} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {countReducer} from "./reducers/countReducer";
import ReduxCounter from "./components/ReduxCounter";


function App() {


  return (
    <Provider store={createStore(countReducer)}>
    <div>
      <ReduxCounter></ReduxCounter>
      <ReduxCounter></ReduxCounter>
      <ReduxCounter></ReduxCounter>
    </div>
    </Provider>
  );
}

export default App;
