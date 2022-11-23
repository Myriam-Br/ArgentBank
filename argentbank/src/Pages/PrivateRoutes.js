import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/AuthSlice";

function RequireAuth({children}) {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()

    // stay logged in when refresh page
    if (token) {
      dispatch(login())
    }
    const { isAuth } = useSelector((state) => state.auth)
    console.log(isAuth);
    return isAuth ? children : <Navigate to='/login' />;

}

export default RequireAuth;