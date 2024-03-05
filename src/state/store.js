import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import primierReducer from "./primierReducer";
const store = configureStore({
    reducer:{
    movie:movieReducer,
    primiere:primierReducer
    }
})

export default store