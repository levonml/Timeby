/* eslint-disable react/prop-types */
import React from "react";
import {  Link } from "react-router-dom";

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
    textDecoration: 'none'
  }
  const container = {
    "textDecoration":"none"
  }

  return(
    <div style = {container}>{year?
      <h1  style = {element}><Link to={`/${year}`}>
        {year}
      </Link>
      </h1>
      : <></>}
    </div>
  )}
export default Timeline