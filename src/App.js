import Couter2 from "./components/Couter2";
import {useState} from "react";

import {createContext} from "react";


const CountContext = createContext({})

export default CountContext


function App() {
    const [count, setCount] = useState(10)

    const ctxObj = {
        count: count,
        change: (num) => {
            setCount(count + num)
        }
    }

  return (
    <div>
      <CountContext.Provider value={ctxObj} >
          <Couter2></Couter2>
          <Couter2></Couter2>
          <Couter2></Couter2>
      </CountContext.Provider>
    </div>
  );
}

export default App;
