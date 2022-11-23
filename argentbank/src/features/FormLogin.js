import {createSlice} from "@reduxjs/toolkit"

const initialState = {value: {email : null, password:null}}

export const formLoginSlice = createSlice({
    name:"formLogin",
    initialState : initialState,
    reducers: {
        checkInput: (state, action) => {
            state.value = action.payload
        },
        deleteInputLogin: (state, action) => {
            state.value = initialState
        }
    }
})

export const {checkInput, deleteInputLogin} = formLoginSlice.actions
export default formLoginSlice.reducer