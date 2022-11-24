import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice"
import authReducer from "./AuthSlice"
import formLoginReducer from "./FormLogin"
import formProfilReducer  from "./FormProfil"
import tokenReducer  from "./TokenSlice"


export default configureStore({
    reducer:{
        token: tokenReducer,
        auth: authReducer,
        user : userReducer,
        formLogin : formLoginReducer,
        formProfil : formProfilReducer
    }
})