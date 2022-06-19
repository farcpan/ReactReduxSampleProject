import { combineReducers } from "redux";
// Reducers
import { counterReducer, CounterReducerType } from "./counter";

export interface RootReducerType {
    counter: CounterReducerType;
}

export const rootReducer = combineReducers<RootReducerType>({
    counter: counterReducer,
});
