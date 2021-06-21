import { createStore } from "redux";
import { todoReducer } from "./reducer";

export const todoStore = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)