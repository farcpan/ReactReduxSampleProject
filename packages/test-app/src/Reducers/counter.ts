import { CounterActionType, CounterActionMethodType } from "../Actions";

// Counter State型定義
export interface CounterReducerType {
    count: number;
}

const getInitialState = () => {
    const tmp = localStorage.getItem("count");
    if (tmp) {
        return JSON.parse(tmp) as CounterReducerType;
    } else {
        return { count: 1 };
    }
};

// Counter Reducer
export const counterReducer = (
    state: CounterReducerType = getInitialState(),
    action: CounterActionType
): CounterReducerType => {
    switch (action.type) {
        case CounterActionMethodType.increment:
            return { ...state, count: state.count + action.value };
        case CounterActionMethodType.decrement:
            return { ...state, count: state.count - action.value };
        case CounterActionMethodType.save:
            // LocalStorageに保存する
            localStorage.setItem("count", JSON.stringify(state));
            return state;
        default:
            return state;
    }
};
