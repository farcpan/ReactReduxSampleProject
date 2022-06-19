import { CounterActionType } from "../Actions";

export interface CounterReducerType {
    count: number;
}

export const counterReducer = (
    state: CounterReducerType = { count: 1 },
    action: any
) => {
    console.log(action);

    switch (action.type) {
        case CounterActionType.increment:
            return { ...state, count: state.count + action.value };
        case CounterActionType.decrement:
            return { ...state, count: state.count - action.value };
        default:
            return state;
    }
};
