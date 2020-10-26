import {createStore} from "redux"
import combineReducers from "../Reducer/index.js"

const store = createStore(combineReducers);

export default store