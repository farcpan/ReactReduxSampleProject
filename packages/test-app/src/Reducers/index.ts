import { combineReducers } from "redux";
// Reducers
import { counterReducer, CounterReducerType } from "./counter";

// 複数のReducerをまとめたデータ定義
export interface RootReducerType {
    counterReducer: CounterReducerType;
}

export const rootReducer = combineReducers<RootReducerType>({
    counterReducer: counterReducer,
});
