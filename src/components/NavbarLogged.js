import React from "react";
import { useState } from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import TimelineButton from "./TimelineButton";
import HomeButton from "./HomeButton";
import Header from "./Header";
import navStyle from "./style/navStyle";
import Burger from "./Burger";
//import { useSelector } from "react-redux";
const NavbarLogged = () => {
  const [downdrop, setDowndrop] = useState(false)
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
        <div className={downdrop ? 'navBar navBarOpen' : 'navBar navBarClose'} style={{display:'flex'}}>
          <HomeButton />
          <TimelineButton />
          <LoginButton />
          <SignupButton />
        </div>
        <Burger setDowndrop = {setDowndrop} downdrop = {downdrop} />
      </div>
    </div>
  )
}
export default NavbarLogged