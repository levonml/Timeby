import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import navStyle from "./style/navStyle";
//import { useSelector } from "react-redux";
const HomeButton = () => {
  let [bg, setBg] = useState("none")
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
  return( 
    <div>
      <button style = {style}
        onMouseEnter={() => setBg(navStyle.buttonHover)}
        onMouseLeave={() => setBg('none')}
      >
        <Link to = {`${user}/home`} style ={navStyle.linkStyle}>Home</Link>
      </button>
    </div>
  )}

export default HomeButton