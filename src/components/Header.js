import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const main = {
    display: "flex",
  };
  const logo = {
    marginTop: "0.5em",
    selfAlign: "center",
    fontSize: "1.5em",
    fontFamily: "roboto",
    fontWeight: "600",
    color: "#54524f",
  };
  const user = {
    alignSelf: "center",
    marginLeft: "0.8em",
    fontSize: "1em",
    fontWeight: "600",
    fontFamily: "roboto",
    color: "#d8c19c",
  };
  const currentUser = useSelector((state) => state.currentUser.userName);
  return (
    <div style={main}>
      <div style={logo}>TimeBy</div>
      <div style={user}> {currentUser}</div>
    </div>
  );
};
export default Header;
