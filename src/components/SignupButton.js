import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import "./stylesheets/stylesheet.css";

const SignupButton = () => {
  let [fontSize, setFontSize] = useState(navStyle.buttonLeave);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const style = {
    background: "none",
    transform: `scale(${fontSize})`,
  };
  const signUpHandle = () => {
    dispatch(setDropDown(!dropDown));
    navigate("/signup");
  };
  const dropDown = useSelector((state) => state.dropDown);
  const user = useSelector((state) => state.currentUser.userName);
  return (
    <div>
      {user ? (
        <></>
      ) : (
        <button
          style={style}
          className="navButton"
          onMouseEnter={() => setFontSize(navStyle.buttonHover)}
          onMouseLeave={() => setFontSize(navStyle.buttonLeave)}
          onClick={signUpHandle}
        >
          Sign up
        </button>
      )}
    </div>
  );
};

export default SignupButton;
