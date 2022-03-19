/* eslint-disable react/prop-types */
import React from "react";
//import { useState } from "react";
import { useDispatch } from "react-redux";
import { setYearPage } from "../redux/reducers/yearPageReducer";
import { useNavigate } from "react-router-dom";
//import { currentUser } from "../halper/halper";
//import CurrentUserYearPage from "./CurrentUserYearPage";


// eslint-disable-next-line no-unused-vars
const Timeline = ({data, currentUser}) => {
  // const [show, setShow] = useState(false)
  //const loggedUser = currentUser()
  const element = {
    margin: 10, 
    width: '3rem',
    height: '3rem',
    background:"lightGray", 
    padding: 20, 
    borderRadius: 100,
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer'
  }
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleYear = (event) => {
    event.preventDefault()
    dispatch(setYearPage(data))
    if (data){
      localStorage.setItem(
        'currentYearPage', JSON.stringify(data)
      )}
    navigate(data.year)
    // setShow(true)
  }
  //console.log("data.year0000000", data)
  return(
    <div>
      <div style = {element} onClick = {handleYear}>
        {data.year}
      </div>
      {/*  {show? <CurrentUserYearPage /> : <></>} */}
      
    </div>
  )}
export default Timeline