import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { currentUser } from "../halper/halper";


const LoginButton = () => {
  const navigate = useNavigate()

  const signOut = () => {
    localStorage.clear()
    navigate('/')
    location.reload()
  }
  return (
    <div >
      {currentUser() ? 
        <button onClick={signOut}>Log out</button>:
        <button ><Link to = "/login">Login</Link></button>}
    </div>
  )
}
export default LoginButton