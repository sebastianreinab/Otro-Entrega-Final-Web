//import { confi combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { autReducer } from "../reducers/authReducer";

const reducers = combineReducers({
    auth: autReducer
})

export const store = configureStore(reducers);