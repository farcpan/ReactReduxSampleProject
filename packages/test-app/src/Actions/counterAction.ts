// CounterAction メソッド定義
export const CounterActionMethodType = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    save: "SAVE",
} as const;
export type CounterActionMethodType =
    typeof CounterActionMethodType[keyof typeof CounterActionMethodType];

//
export interface CounterActionType {
    type: CounterActionMethodType;
    value: number;
}

export const increment = (value: number): CounterActionType => {
    return {
        type: CounterActionMethodType.increment,
        value: value,
    };
};

export const decrement = (value: number): CounterActionType => {
    return {
        type: CounterActionMethodType.decrement,
        value: value,
    };
};

export const saveValue = (): CounterActionType => {
    return {
        type: CounterActionMethodType.save,
        value: 0,
    };
};
