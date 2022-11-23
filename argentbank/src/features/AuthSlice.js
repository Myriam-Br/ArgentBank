import {createSlice} from "@reduxjs/toolkit"

const initialState = {isLoading: false, isRemembered:false,  isAuth: false, isFailed: ''}

export const authSlice = createSlice({
    name:"auth",
    initialState : initialState,
    reducers: {
        pending: (state) => {
            state.isLoading = true
        },
        login: (state) => {
            state.isLoading = false
            state.isAuth = true
            state.error = ''
        },
        rememberMe: (state) => {
            state.isRemembered = true
        },
        loginFailed: (state, action) => {
            state.isFailed = action.payload
        }, 
        logout : (state, action) => {
            state = initialState
        }
    }
})

export const {pending, login, rememberMe,loginFailed, logout} = authSlice.actions
export default authSlice.reducer