import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../counter/CounterSlice";

const Store = configureStore({
    reducer: {
        counter: CounterReducer,
    },
});

export default Store;