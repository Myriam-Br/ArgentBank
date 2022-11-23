import {createSlice} from "@reduxjs/toolkit"

//for profile page
const initialState = {value: {firstName : null, lastName: null, id: null, status: null, message : null }}

export const userSlice = createSlice({
    name:"user",
    initialState : initialState,
    reducers: {
        getUserName : (state, action) => {
            state.value = action.payload
        },

        updateName: (state, action) => {
            if(state.id === action.payload.id) {
                return {
                    ...state,
                    firstName : action.payload,
                    lastName : action.payload,
                } 
            }
            else{
                return state
            }
        },

        deleteUserName: (state, action) => {
            state.value = initialState
        }
    }

})

export const {getUserName, updateName, deleteUserName } = userSlice.actions
export default userSlice.reducer