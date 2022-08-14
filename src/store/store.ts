import { createStore } from "redux";
import { inputSearchReducer } from "../reducers/inputSearchReducer";

export const store = createStore(inputSearchReducer)