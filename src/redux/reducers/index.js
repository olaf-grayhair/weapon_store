import { combineReducers } from "redux";
import { filtersReducer } from "./filters";
import { onePageReducer } from "./onePageReducer";
import { weaponsReducer } from "./weaponsReducer";



export const rootReducer = combineReducers({
    weapons: weaponsReducer,
    onePage: onePageReducer,
    filters: filtersReducer,
})

