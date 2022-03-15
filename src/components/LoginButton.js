import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import './stylesheets/navbar.css'

const LoginButton = () => {

  
  let [bg, setBg] = useState("none")
  const navigate = useNavigate()
  const dispatch = useDispatch

  const style ={
    padding: '1em',
    background: `${bg}`,
    border: 'none',
  }
  
  const dropDown = useSelector(state=>state.dropDown)
  const user = useSelector(state=>state.currentUser.userName)

  const signOut = () => {
    () => dispatch(setDropDown(!dropDown))
    localStorage.clear()
    navigate('/')
    location.reload()
  }
  const logIn = () => () => dispatch(setDropDown(!dropDown))
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
          onClick={logIn}
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