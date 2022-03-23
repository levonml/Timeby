import React from "react";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import Header from "./Header";
import navStyle from "./style/navStyle";
import Burger from "./Burger";

import "./stylesheets/stylesheet.css";

const Navbar = () => {
  const nav = {
    display: "flex",
  };
  const dropDown = useSelector((state) => state.dropDown);

  return (
    <div style={nav}>
      <div className="logoContainer">
        <Header />
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
