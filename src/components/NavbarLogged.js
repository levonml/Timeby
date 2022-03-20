import React from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import TimelineButton from "./TimelineButton";
import HomeButton from "./HomeButton";
import Header from "./Header";
import navStyle from "./style/navStyle";
import Burger from "./Burger";
import { useSelector } from "react-redux";

const NavbarLogged = () => {
  const nav = {
    display: "flex",
  };
  const dropDown = useSelector((state) => state.dropDown);
  return (
    <div style={nav}>
      <div style={navStyle.logo}>
        <Header />
      </div>
      <div style={navStyle.navRight}>
        <div
          className={dropDown ? "navBar navBarClose" : "navBar navBarOpen"}
          style={{ display: "flex" }}
        >
          <HomeButton />
          <TimelineButton />
          <LoginButton />
          <SignupButton />
        </div>
        <Burger />
      </div>
    </div>
  );
};
export default NavbarLogged;
