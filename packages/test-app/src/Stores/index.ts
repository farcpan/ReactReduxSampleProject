import { createStore } from "redux";

export interface DataType {
    count: number;
}

const initialState: DataType = {
    count: 1,
};

const reducer = (state = initialState) => {
    return state;
};

const store = createStore(reducer);

export default store;
