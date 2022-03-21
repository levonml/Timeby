import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import "./stylesheets/stylesheet.css";
//import { currentUser } from "../halper/halper";
const HomeButton = () => {
  let [fontSize, setFontSize] = useState(navStyle.buttonLeave);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const style = {
    background: "none",
    transform: `scale(${fontSize})`,
  };
  const user = useSelector((state) => state.currentUser.userName);
  const dropDown = useSelector((state) => state.dropDown);
  const homeHandle = () => {
    dispatch(setDropDown(!dropDown));
    navigate(`${user}/home`);
  };
  return (
    <div>
      <button
        style={style}
        className="navButton"
        onMouseEnter={() => setFontSize(navStyle.buttonHover)}
        onMouseLeave={() => setFontSize(navStyle.buttonLeave)}
        onClick={homeHandle}
      >
        Home
      </button>
    </div>
  );
};

export default HomeButton;
