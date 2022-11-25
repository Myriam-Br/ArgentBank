import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login, pending, rememberMe, loginFailed } from "../features/AuthSlice";
import { checkInput } from "../features/FormLogin";
import { validateEmail, error } from "../features/CheckInput";
import { userLogin } from "../API/ApiCalls";
import { auth, notauth } from "../features/TokenSlice";

function Form() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //validate input
    function validator(value, input) { 
    // eslint-disable-next-line
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        switch(input){
            case 'email':
            dispatch(checkInput({email: validateEmail(value, regexEmail.test(value)), password:password}))
            break
            case 'password':
            dispatch(checkInput({email: email, password: value}))
            break
            default:
            console.log("input doesn't exist");
        } 
    }
    const email = useSelector(state => state.formLogin.value.email)
    const password = useSelector(state => state.formLogin.value.password)

    const {isRemembered } = useSelector((state) => state.auth)
    const {isFailed} = useSelector((state) => state.auth)

    async function submitForm(e) { 
        e.preventDefault()
        dispatch(pending())
     
        try {
            const token = await userLogin(email, password)
            dispatch(auth({token:token, status:202}))

            if (isRemembered) {
            localStorage.setItem('token', token)
            } else {
            localStorage.removeItem('token')
            }
            
            dispatch(login())
            dispatch(loginFailed(''))
            navigate('/profile')

        }catch (err) {
            dispatch(notauth())
            dispatch(loginFailed('Check your email and password'))
        }
    }

    return( 
        <form onSubmit={submitForm}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => validator(e.target.value, 'email') }/>
                <span>{error(email,'email')}</span>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"  onChange={(e) => validator(e.target.value, 'password')} />
            </div>
            <div className="input-remember">
                <input 
                    type="checkbox" 
                    id="remember-me"  
                    name="remember-me"
                    defaultChecked={isRemembered}
                    onChange={() => dispatch(rememberMe(!isRemembered))}
                  />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <span>{isFailed}</span>
            <input className="sign-in-button" type="submit" value='Sign In'/>
        </form>  
    ) 
}

export default Form