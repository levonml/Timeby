import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";

const LoginButton = () => {
  const navigate = useNavigate()
  let user = null
  const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    user =  JSON.parse(loggedUserJSON).data.Username
  }
  //const loggedUser = useSelector(state =>state.currentUser)
  const signOut = () => {
    localStorage.clear()
    navigate('/')
    location.reload()
  }
  return (
    <div >
      {user  ? 
        <button onClick={signOut}>Log out</button>:
        <button ><Link to = "/login">Login</Link></button>
      }
    </div>
  )
}
export default LoginButton