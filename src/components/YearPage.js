/* eslint-disable react/prop-types */
import React from "react";
import {  Route, Routes } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const YearPage = ({time}) => (
  <div>
  
    <Routes>
      {
        time.map((year,key) =>{
          return(
            <Route exact path = {`${year}`} key = {key} element = {<h1  style = {{'margin': 300, 'display': 'inline-block'}}>{year}</h1>}>
            </Route>
         
          )
        })
      }

    </Routes>
 
  </div>
)
export default YearPage