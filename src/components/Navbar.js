import React from "react";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import Logo from "./Logo";
import navStyle from "./style/navStyle";
import Burger from "./Burger";

import "./stylesheets/stylesheet.css";

const Navbar = () => {
  const dropDown = useSelector((state) => state.dropDown);

  return (
    <div className="header">
      <div className="logoContainer">
        <Logo />
      </div>
      <div style={navStyle.navRight}>
        <div
          className={dropDown ? "navBar navBarClose" : "navBar navBarOpen"}
          style={{ display: "flex", gap: "1.5em" }}
        >
          <LoginButton />
          <SignupButton />
        </div>
        <Burger />
      </div>
    </div>
  );
};
export default Navbar;
