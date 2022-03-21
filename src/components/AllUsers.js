import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setShowUsers } from "../redux/reducers/showUserReducer";
import { setDropDown } from "../redux/reducers/navReducer";
import { getAll } from "../redux/reducers/userReducer";
import navStyle from "./style/navStyle";

const AllUsers = () => {
  const [fontSize, setFontSize] = useState(false);
  const dispatch = useDispatch();
  const style = {
    background: "none",
    transform: `scale(${fontSize})`,
  };

  const dropDown = useSelector((state) => state.dropDown);
  const showUsers = useSelector((state) => state.showUsers);
  console.log("sow users", showUsers);
  //const buttonText = showUsers ? "hide" : "Show who is in";
  const handleUsers = (event) => {
    event.preventDefault();
    localStorage.setItem("showUsers", !showUsers);
    dispatch(setShowUsers(!showUsers));
    dispatch(setDropDown(!dropDown));
    dispatch(getAll());
  };
  return (
    <div>
      <button
        onClick={handleUsers}
        style={style}
        className="navButton"
        onMouseEnter={() => setFontSize(navStyle.buttonHover)}
        onMouseLeave={() => setFontSize(navStyle.buttonLeave)}
      >
        Show all users
      </button>
    </div>
  );
};
export default AllUsers;
