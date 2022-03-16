import React from "react";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import './stylesheets/stylesheet.css'


const SignupButton = () => {
  let [bg, setBg] = useState("none")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const style ={
    background: `${bg}`,
  }
  const signUpHandle = () => {
    dispatch(setDropDown(!dropDown))
    navigate('/signup')
  }
  const dropDown = useSelector(state=>state.dropDown)
  const user = useSelector(state =>state.currentUser.userName)
  return(
    <div>
      {user ?
        <></>:
        <button style = {style} className = 'navButton'
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
          onClick={signUpHandle}
        >
			Sign up
        </button>
      }
    </div>
  )}

export default SignupButton