import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Reducer
import { rootReducer } from "../Reducers";

// ?
const storeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
export const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
);
