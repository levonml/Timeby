import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import './stylesheets/stylesheet.css'

const LoginButton = () => {

  
  let [bg, setBg] = useState("none")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const style ={
    background: `${bg}`,
  }
  
  const dropDown = useSelector(state=>state.dropDown)
  const user = useSelector(state=>state.currentUser.userName)

  const signOutHandle = () => {
    dispatch(setDropDown(!dropDown))
    localStorage.clear()
    navigate('/')
    location.reload()
  }
  const logInHandle = () => {
    dispatch(setDropDown(!dropDown))
    navigate('/login')
  }
  return (
    <div >
      {user  ? 
        <button className = 'navButton' onClick={signOutHandle} style = {style} 
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
        >
			Log out
        </button>:
        <button style={style} className = 'navButton'
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
          onClick={logInHandle}
        >
			Login
        </button>
      }
    </div>
  )
}
export default LoginButton