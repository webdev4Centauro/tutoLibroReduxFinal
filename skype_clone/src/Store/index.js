import {createStore} from "redux"
import reducer from "../Reducer/index.js"
import { contacts } from "../static-data.js" 

const store = createStore(reducer, {contacts: contacts});

export default store