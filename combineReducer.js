import inputReducer from "./InputReducer";
import mainReducer from "./MainReducer";

import { combineReducers } from "redux";

const allReducer = combineReducers({ input: inputReducer, add: mainReducer });

export default allReducer;
