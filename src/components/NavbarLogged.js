import React from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import TimelineButton from "./TimelineButton";
import HomeButton from "./HomeButton";
import Header from "./Header";
import navStyle from "./style/navStyle";
//import { useSelector } from "react-redux";
const NavbarLogged = () => {
 
  //const loggedUser = useSelector(state =>state.currentUser)
  const nav = {
    display:"flex"
  }
  return (
    <div style ={nav}>
      <div style={navStyle.logo}>
        <Header />
      </div>
      <div style = {navStyle.navRight}>
        <HomeButton />
        <TimelineButton />
        <LoginButton />
        <SignupButton />
      </div>
    </div>
  )
}
export default NavbarLogged