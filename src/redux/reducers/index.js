import { combineReducers } from "redux";
import { onePageReducer } from "./onePageReducer";
import { weaponsReducer } from "./weaponsReducer";



export const rootReducer = combineReducers({
    weapons: weaponsReducer,
    onePage: onePageReducer,
})

