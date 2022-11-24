import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { getUserName, updateName } from "../features/UserSlice";
import { checkInput, deleteInput } from "../features/FormProfil";
import { userProfil, updateProfil } from "../API/ApiCalls";

function UserProfil() {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false);
  const [errorFirstName, setErrorFirstName] = useState(null)
  const [errorLastName, setErrorLastName] = useState(null)
  const {token} = useSelector(state => state.token.token)

  function getToken() {
    if(localStorage.getItem('token')) {
      return localStorage.getItem('token')
    }else{
      return token
    }
  }
  
  useEffect(() => {
    async function fetchData() {
      const res =  await userProfil({}, {headers: {'Authorization': 'Bearer' + ' ' + getToken()}})
      return dispatch(getUserName({firstName:res.data.body.firstName, lastName: res.data.body.lastName, id: res.data.body.id, status:  res.data.status, message : res.data.message }))
    }
    fetchData()
  },[dispatch, getToken()])

  //firstname and lastname to display
  const userLastName = useSelector(state => state.user.value.lastName)
  const userFirstName = useSelector(state => state.user.value.firstName)
  let firstName = useSelector(state => state.formProfil.value.firstName)
  let lastName = useSelector(state => state.formProfil.value.lastName)

  //validate input
  function validatInputProfil(value, input) { 
    var letters = /^[A-Za-z]+$/g;   
    if(value && letters.test(value)) {
      switch(input){
        case 'firstName':
          dispatch(checkInput({firstName : value, lastName : lastName}))
          setErrorFirstName('')
          break
        case 'lastName':
          dispatch(checkInput({firstName : firstName, lastName: value}))
          setErrorLastName('')
          break
          default:
          console.log("input doesn't exist");
      }     
    }else{
      switch(input){
        case 'firstName':
          setErrorFirstName('firstname must contain only letters and no spaces')
          break
        case 'lastName':
          setErrorLastName('lastName must contain only letters and no spaces')
          break
          default:
          console.log("input doesn't exist");
      }  
    }  
  }

 
  async function handleEditName() {
    setEdit(!edit)
    if(!firstName) {
      firstName = userFirstName
    }
    if(!lastName) {
      lastName = userLastName
    }
    const res = await updateProfil({firstName, lastName}, {headers: {'Authorization': 'Bearer' + ' ' + getToken()}})
    dispatch(updateName({firstName:res.data.body.firstName, lastName: res.data.body.lastName, id: res.data.body.id,  status: res.data.status, message : res.data.message }))
    dispatch(getUserName({firstName:res.data.body.firstName, lastName: res.data.body.lastName, id: res.data.body.id, status:  res.data.status, message : res.data.message }))
    dispatch(deleteInput())
  } 

  return  <div className="header">
    {edit ? (
      <section className="input-wrapper edit-info" >
        <label htmlFor="firstName">New Firstname</label>
        <input type="text" id="firstName"  onChange={(e) => validatInputProfil(e.target.value,'firstName')}/> 
        <span>{errorFirstName}</span>     
        <label htmlFor="lastName">New Lastname</label>
        <input type="text" id="lastName" onChange={(e) => validatInputProfil(e.target.value,'lastName')} />
        <span>{errorLastName}</span>       
      </section>
      ):(
       <h1>Welcome back<br/>{userFirstName} {userLastName}</h1>
      )}
     <button className="edit-button" type="submit" onClick={() => handleEditName()}>Edit Name</button>     
    </div>
}

export default UserProfil