import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDropDown } from "../redux/reducers/navReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./stylesheets/stylesheet.css";
const Burger = () => {
  const menuOpen = <FontAwesomeIcon icon={faBars} />;
  const menuClose = <FontAwesomeIcon icon={faXmark} />;

  const dispatch = useDispatch();
  const dropDown = useSelector((state) => state.dropDown);
  const dropdownHandle = () => {
    localStorage.setItem("dropDown", !dropDown);
    dispatch(setDropDown(!dropDown));
  };
  return (
    <button className="burger" onClick={dropdownHandle}>
      {dropDown ? menuOpen : menuClose}
    </button>
  );
};
export default Burger;
