import {createSlice} from "@reduxjs/toolkit"

const initialState = {value: {firstName : null, lastName:null}}

export const formProfilSlice = createSlice({
    name:"formProfil",
    initialState : initialState,
    reducers: {
        checkInput: (state, action) => {
            state.value = action.payload
        },
        deleteInput: (state, action) => {
            state.value = initialState
        }
    }
})

export const {checkInput, deleteInput} = formProfilSlice.actions
export default formProfilSlice.reducer