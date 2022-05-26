//Traigo lo del reducer
import reducer from "./reducer";
import { applyMiddleware, createStore } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;