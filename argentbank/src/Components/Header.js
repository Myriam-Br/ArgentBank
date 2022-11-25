import React, {useEffect} from "react";
import Logo from "../designs/img/argentBankLogo.png"
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { logout, login } from "../features/AuthSlice";
import { deleteUserName } from "../features/UserSlice";
import { deleteInput } from "../features/FormProfil";
import { deleteInputLogin } from "../features/FormLogin";
import { getUserName } from "../features/UserSlice";
import { userProfil } from "../API/ApiCalls";

function Header() {

    const dispatch = useDispatch()
    const tokenStored = localStorage.getItem('token')

    useEffect(() => {

        if(localStorage.getItem('token')) {
            dispatch(login())

            async function fetchData() {
                // eslint-disable-next-line
                const res =  await userProfil({}, {headers: {'Authorization': 'Bearer' + ' ' + localStorage.getItem('token')}})
                return dispatch(getUserName({firstName:res.data.body.firstName, lastName: res.data.body.lastName, id: res.data.body.id, status:  res.data.status, message : res.data.message }))
            }
            fetchData()
        }else{
            console.log("don't fetch data");
        }
      
     
      }, [dispatch, tokenStored])

    const firstName = useSelector(state => state.user.value.firstName)
    const {isAuth} = useSelector(state => state.auth)

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
    {  isAuth ? (
            <div className="loggedin">
        <Link className="main-nav-item" to='/profile'>
            <i className="fa fa-user-circle"></i>
            {firstName}
        </Link>
        <Link className="main-nav-item" to='/' onClick={() => handleLogout()}>
            <i className="fa fa-user-circle"></i>
           Logout
        </Link>
    </div>) : (
            <div className="loggedout">
            <Link className="main-nav-item" to='/login'>
                <i className="fa fa-user-circle"></i>
                Sign In   
            </Link>
        </div>
        )
    }
    
   
</nav>
}

export default Header