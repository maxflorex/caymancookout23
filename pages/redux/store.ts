import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./isAuthSlice";

const store = configureStore({
    reducer: {
        authorization: AuthSlice.reducer
    }
})

export default store