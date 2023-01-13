import { configureStore } from "@reduxjs/toolkit";
import { AdminSlice } from "./adminSlice";
import { AuthSlice } from "./isAuthSlice";

const store = configureStore({
    reducer: {
        authorization: AuthSlice.reducer,
        administrator: AdminSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store