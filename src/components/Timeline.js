/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { setYearPage } from "../redux/reducers/yearPageReducer";
import { useNavigate } from "react-router-dom";
const Timeline = ({ data }) => {
  const element = {
    margin: 10,
    width: "2rem",
    height: "2rem",
    padding: 20,
    borderRadius: 100,
    fontSize: "1.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    cursor: "pointer",
    background: "black",
    color: "white",
    opacity: "0.5",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleYear = (event) => {
    event.preventDefault();
    dispatch(setYearPage(data));
    if (data) {
      localStorage.setItem("currentYearPage", JSON.stringify(data));
    }
    navigate(data.year);
    // setShow(true)
  };
  //console.log("data.year0000000", data)
  return (
    <div>
      <div style={element} onClick={handleYear}>
        {data.year}
      </div>
      {/*  {show? <CurrentUserYearPage /> : <></>} */}
    </div>
  );
};
export default Timeline;
