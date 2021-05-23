import Couter2 from "./components/Couter2";
import {useReducer, useState} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ReduxCounter from "./components/ReduxCounter";

import rootReducer from "./reducers"

function App() {


  return (
    <Provider store={createStore(rootReducer)}>
    <div>
      <ReduxCounter></ReduxCounter>
      <ReduxCounter></ReduxCounter>
      <ReduxCounter></ReduxCounter>
    </div>
    </Provider>
  );
}

export default App;
