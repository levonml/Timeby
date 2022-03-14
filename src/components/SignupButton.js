import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
//import { useSelector } from "react-redux";
import navStyle from "./style/navStyle";


const SignupButton = () => {
  let [bg, setBg] = useState("none")
  const style ={
    padding: '1em',
    background: `${bg}`,
    border: 'none',
    color: 'white'
  }
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
        <button style = {style}
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
        ><Link to = "/signup" style = {navStyle.linkStyle}>Sign up</Link></button>
      }
    </div>
  )}

export default SignupButton