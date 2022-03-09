/* eslint-disable react/prop-types */
import React from "react";
//import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setYear } from "../redux/reducers/yearReducer";
import { useNavigate } from "react-router-dom";
//import { currentUser } from "../halper/halper";
//import CurrentUserPage from "./CurrentUserPage";

// eslint-disable-next-line no-unused-vars
const Timeline = ({year, yearId}) => {
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
 
  //const loggedUser = currentUser()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleYear = (event) => {
    event.preventDefault()
    dispatch(setYear(year))
    if (year){
      localStorage.setItem(
        'currentYear', JSON.stringify(year)
      )}
    navigate(`${year}`)
    //location.reload()
  }
  return(
    <div>
      <div style = {element} onClick = {handleYear}>
        {year}
      </div>
      {/*     <Routes>
        <Route path = {`/${loggedUser}/timeline/${year}`} element ={loggedUser ? <CurrentUserPage/> : <>loading...</>}></Route>
      </Routes> */}
    </div>
  )}
export default Timeline