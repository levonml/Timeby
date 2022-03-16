import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import './stylesheets/stylesheet.css'
//import { currentUser } from "../halper/halper";
const HomeButton = () => {
  let [bg, setBg] = useState("none")
  const dispatch = useDispatch()
  const style ={
    padding: '1em',
    background: `${bg}`,
    border: 'none',
    width: '100%'
  }
  const user = useSelector(state=>state.currentUser.userName)
  const dropDown = useSelector(state=>state.dropDown)
  return( 
    <div>
      <button style = {style}
        onMouseEnter={() => setBg(navStyle.buttonHover)}
        onMouseLeave={() => setBg('none')}
        onClick={() => dispatch(setDropDown(!dropDown))}
      >
        <Link to = {`${user}/home`} style ={navStyle.linkStyle} className = 'navButton'>Home</Link>
      </button>
    </div>
  )}

export default HomeButton