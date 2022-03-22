import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import logo from "../img/timebyLogo.png";

const Header = () => {
  const main = {
    display: "flex",
    cursor: "pointer",
  };

  const user = {
    alignSelf: "center",
    marginLeft: "0.8em",
    fontSize: "1em",
    fontWeight: "600",
    fontFamily: "roboto",
    color: "#371f49",
  };
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser.userName);
  return (
    <div style={main} onClick={() => navigate("/home")}>
      <img src={logo} alt="logo cat" width="80em" height="80em" />
      <div style={user}> {currentUser}</div>
    </div>
  );
};
export default Header;
