import { combineReducers } from "redux";
import { weaponsReducer } from "./weaponsReducer";



export const rootReducer = combineReducers({
    weapons: weaponsReducer,
})

