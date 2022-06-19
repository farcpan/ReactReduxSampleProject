export const CounterActionType = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
} as const;
export type CounterActionType =
    typeof CounterActionType[keyof typeof CounterActionType];

export const increment = (value: number) => {
    return {
        type: CounterActionType.increment,
        value: value,
    };
};

export const decrement = (value: number) => {
    return {
        type: CounterActionType.decrement,
        value: value,
    };
};
