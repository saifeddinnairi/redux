import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import toDoReducer from "./toDoReducer";


export default combineReducers({
    toDoReducer,
    filterReducer
})