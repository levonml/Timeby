import React from "react";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import Header from "./Header";
import navStyle from "./style/navStyle";
import Burger from "./Burger";

const Navbar = () => {
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
          <LoginButton />
          <SignupButton />
        </div>
        <Burger />
      </div>
    </div>
  );
};
export default Navbar;
