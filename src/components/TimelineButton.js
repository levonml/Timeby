import React from "react";
import { Link} from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import './stylesheets/navbar.css'

const Timeline = () => {
  let [bg, setBg] = useState("none")
  const dispatch = useDispatch()
  const style ={
    padding: '1em',
    background:`${bg}`,
    border: 'none',
  }
  const dropDown = useSelector(state=>state.dropDown)
  const user = useSelector(state=>state.currentUser.userName)

  return (
    <div >
      {user ?
        <button style ={style}
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
          onClick={() => dispatch(setDropDown(!dropDown))}
        >
          <Link to={`/${user}/timeline`} style = {navStyle.linkStyle} className = 'navButton'>Time line
          </Link></button> :
        <></>}
     
    </div> 
  )
}
export default Timeline