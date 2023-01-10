import { createSlice } from '@reduxjs/toolkit'

// STATE TS VAKLUES
interface isAuthState {
    value: boolean
}

// INITIAL STATE
const InitialState = { value: false } as isAuthState

// CREATE SLICE
export const AuthSlice = createSlice({
    name: 'Authorization',
    initialState: InitialState,
    reducers: {
        isAuth: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { isAuth } = AuthSlice.actions