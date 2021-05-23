import {countReducer} from "./countReducer";
import {combineReducers} from "redux";
import {sampleReducer} from "./sampleReducer";


export default combineReducers({countReducer,sampleReducer})