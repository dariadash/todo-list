import { createStore } from "redux";
import { todoReducer } from "./reducer";

export const todoStore = createStore(todoReducer)