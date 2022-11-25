import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SignInRedirect({children}) {

  const { isAuth } = useSelector((state) => state.auth)

  return !isAuth ? children : <Navigate to='/profile'/>;
}

export default SignInRedirect;