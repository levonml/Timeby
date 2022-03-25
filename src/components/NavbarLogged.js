import React from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import TimelineButton from "./TimelineButton";
import HomeButton from "./HomeButton";
import Logo from "./Logo";
import navStyle from "./style/navStyle";
import Burger from "./Burger";
import { useSelector } from "react-redux";
import AllUsers from "./AllUsers";

import "./stylesheets/stylesheet.css";
import SearchBar from "./SearchBar";

const NavbarLogged = () => {
  const dropDown = useSelector((state) => state.dropDown);
  return (
    <div className="header">
      <div className="logoContainer">
        <Logo />
      </div>
      <div>
        <SearchBar />
      </div>
      <div style={navStyle.navRight}>
        <div
          className={dropDown ? "navBar navBarClose" : "navBar navBarOpen"}
          style={{ display: "flex", gap: "1.5em" }}
        >
          <HomeButton />
          <TimelineButton />
          <AllUsers />
          <LoginButton />
          <SignupButton />
        </div>
        <Burger />
      </div>
    </div>
  );
};
export default NavbarLogged;
