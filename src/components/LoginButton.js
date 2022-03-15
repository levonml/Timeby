import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import navStyle from "./style/navStyle";
import './stylesheet.css'
//import { useSelector } from "react-redux";

const LoginButton = () => {
  let [bg, setBg] = useState("none")
  const navigate = useNavigate()
  const style ={
    padding: '1em',
    background: `${bg}`,
    border: 'none',
  }
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
        <button className = 'navButton' onClick={signOut} style = {style} 
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
        >
			Log out
        </button>:
        <button style={style} 
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
        >
          <Link to = "/login" style ={navStyle.linkStyle} className = 'navButton'>
			Login
          </Link>
        </button>
      }
    </div>
  )
}
export default LoginButton