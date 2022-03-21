import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setDropDown } from "../redux/reducers/navReducer";
import navStyle from "./style/navStyle";
import "./stylesheets/stylesheet.css";

const Timeline = () => {
  let [fontSize, setFontSize] = useState(navStyle.buttonLeave);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const style = {
    background: "none",
    transform: `scale(${fontSize})`,
  };
  const dropDown = useSelector((state) => state.dropDown);
  const user = useSelector((state) => state.currentUser.userName);
  const timeLineHandle = () => {
    dispatch(setDropDown(!dropDown));
    navigate(`/${user}/timeline`);
  };
  return (
    <div>
      {user ? (
        <button
          style={style}
          className="navButton"
          onMouseEnter={() => setFontSize(navStyle.buttonHover)}
          onMouseLeave={() => setFontSize(navStyle.buttonLeave)}
          onClick={timeLineHandle}
        >
          Time line
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Timeline;
