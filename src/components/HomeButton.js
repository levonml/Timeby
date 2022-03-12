import React from "react";
import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
const HomeButton = () => {
  // const loggedUser = useSelector(state => state.currentUser)
  let user = null
  const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    user =  JSON.parse(loggedUserJSON).data.Username
  }
  return( 
    <div>
      <button><Link to = {`${user}/home`}>Home</Link></button>
    </div>
  )}

export default HomeButton