import React from "react";
import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";

const SignupButton = () => {
  let user = null
  const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    user =  JSON.parse(loggedUserJSON).data.Username
  }
  //const loggedUser = useSelector(state =>state.currentUser)
  return(
    <div>
      {user ?
        <></>:
        <button><Link to = "/signup">Sign up</Link></button>
      }
    </div>
  )}

export default SignupButton