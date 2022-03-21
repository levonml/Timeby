import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import "./stylesheets/stylesheet.css";

const LoginButton = () => {
  let [fontSize, setFontSize] = useState(navStyle.buttonLeave);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const style = {
    background: "none",
    transform: `scale(${fontSize})`,
  };

  const dropDown = useSelector((state) => state.dropDown);
  const user = useSelector((state) => state.currentUser.userName);

  const signOutHandle = () => {
    dispatch(setDropDown(!dropDown));
    localStorage.clear();
    navigate("/");
    location.reload();
  };
  const logInHandle = () => {
    dispatch(setDropDown(!dropDown));
    navigate("/login");
  };
  return (
    <div>
      {user ? (
        <button
          className="navButton"
          onClick={signOutHandle}
          style={style}
          onMouseEnter={() => setFontSize(navStyle.buttonHover)}
          onMouseLeave={() => setFontSize(navStyle.buttonLeave)}
        >
          Log out
        </button>
      ) : (
        <button
          style={style}
          className="navButton"
          onMouseEnter={() => setFontSize(navStyle.buttonHover)}
          onMouseLeave={() => setFontSize(navStyle.buttonLeave)}
          onClick={logInHandle}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default LoginButton;
