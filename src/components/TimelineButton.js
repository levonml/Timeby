import React from "react";
import { Link} from "react-router-dom";
import { useState } from "react";
import navStyle from "./style/navStyle";
import './stylesheet.css'

const Timeline = () => {
  let [bg, setBg] = useState("none")
  
  const style ={
    padding: '1em',
    background:`${bg}`,
    border: 'none',
  }
  
  let user = null
  const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    user =  JSON.parse(loggedUserJSON).data.Username
  }
  return (
    <div >
      {user ?
        <button style ={style}
          onMouseEnter={() => setBg(navStyle.buttonHover)}
          onMouseLeave={() => setBg('none')}
        >
          <Link to={`/${user}/timeline`} style = {navStyle.linkStyle} className = 'navButton'>Time line
          </Link></button> :
        <></>}
     
    </div> 
  )
}
export default Timeline