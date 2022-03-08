import React from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import { currentUser } from "../halper/halper";
import Timeline from "./Timeline";
import HomeButton from "./HomeButton";

const Navbar = () => {
  const nav = {
    "display":"flex"
  }
  return (
    <div style ={nav}>
      {currentUser() ?
        <Timeline /> : 
        <></>}
      <HomeButton />

      <LoginButton />
      <SignupButton />
    </div>
  )
}
export default Navbar