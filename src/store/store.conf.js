import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./slices/movies.slice";

export const store = configureStore({
    reducer: {
        movieReducer
    }
});
