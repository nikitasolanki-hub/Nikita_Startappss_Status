// configureStore creates global Redux store


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";


export const store = configureStore({
    reducer:{
        counter:  counterReducer,
    }
})