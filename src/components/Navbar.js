import React from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
//import TimelineButton from "./TimelineButton";
//import HomeButton from "./HomeButton";
//import { useSelector } from "react-redux";
const Navbar = () => {
 
  //const loggedUser = useSelector(state =>state.currentUser)
  const nav = {
    "display":"flex"
  }
  return (
    <div style ={nav}>
      <LoginButton />
      <SignupButton />
    </div>
  )
}
export default Navbar