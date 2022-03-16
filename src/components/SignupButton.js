import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import './stylesheets/stylesheet.css'


const SignupButton = () => {
  let [bg, setBg] = useState("none")
  const dispatch = useDispatch()
  const style ={
    padding: '1em',
    background: `${bg}`,
    border: 'none',
    color: 'white',
    width: '100%'
  }
  
  const dropDown = useSelector(state=>state.dropDown)
  const user = useSelector(state =>state.currentUser.userName)
  return(
    <div>
      {user ?
        <></>:
        <button style = {style}
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
          onClick={() => dispatch(setDropDown(!dropDown))}
        ><Link to = "/signup" style = {navStyle.linkStyle} className = 'navButton'>Sign up</Link></button>
      }
    </div>
  )}

export default SignupButton