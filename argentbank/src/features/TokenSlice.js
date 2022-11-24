import {createSlice} from "@reduxjs/toolkit"

const initialState = {token: 'token', status : null}

export const tokenSlice = createSlice({
    name:"token",
    initialState : initialState,
    reducers: {
        auth: (state, action) => {
            state.token = action.payload
        },
        notauth: (state, action) => {
            state = initialState
        }
    }
})

export const {auth, notauth} = tokenSlice.actions
export default tokenSlice.reducer