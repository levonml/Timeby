import React from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import Header from "./Header";
import navStyle from "./style/navStyle";

const Navbar = () => {
  const nav = {
    display:"flex",
  }
  return (
    <div style ={nav}>
      <div style = {navStyle.logo}>
        <Header />
      </div>
      <div style = {navStyle.navRight}>
        <LoginButton />
        <SignupButton />
      </div>
    </div>
  )
}
export default Navbar