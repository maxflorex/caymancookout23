import { createSlice } from "@reduxjs/toolkit";

// STATE TS VALUES
interface adminState {
    value: object
}

// INITIAL STATE
const InitialState = { value: { user: {} } } as adminState

// CREATE SLICE
export const AdminSlice = createSlice({
    name: 'Admin',
    initialState: InitialState,
    reducers: {
        signInAdmin: (state, action) => {
            state.value = action.payload
        },
        signOutAdmin: (state) => {
            state.value = InitialState.value
        }
    }
})

export const { signInAdmin, signOutAdmin } = AdminSlice.actions