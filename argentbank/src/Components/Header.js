import React from "react";
import Logo from "../designs/img/argentBankLogo.png"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/AuthSlice";
import { deleteUserName } from "../features/UserSlice";
import { deleteInput } from "../features/FormProfil";
import { deleteInputLogin } from "../features/FormLogin";


function Header() {

    const dispatch = useDispatch()

    function handleLogout() {
        localStorage.clear()
        dispatch(logout())
        dispatch(deleteUserName())
        dispatch(deleteInput())
        dispatch(deleteInputLogin())
    }

 return  <nav className="main-nav">
    <Link className="main-nav-logo" to="/"> 
        <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
        <Link className="main-nav-item" to='/login'>
            <i className="fa fa-user-circle"></i>
            Sign In   
        </Link>
        <Link className="main-nav-item" to='/' onClick={() => handleLogout()}>
            <i className="fa fa-user-circle"></i>
           Logout
        </Link>
    </div>
</nav>
}

export default Header