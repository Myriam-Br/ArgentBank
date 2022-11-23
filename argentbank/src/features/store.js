import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
import authReducer from "./AuthSlice"
import formLoginSlice from "./FormLogin"
import formProfilSlice  from "./FormProfil"


export default configureStore({
    reducer:{
        auth: authReducer,
        user : userReducer,
        formLogin : formLoginSlice,
        formProfil : formProfilSlice
    }
})