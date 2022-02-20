/* eslint-disable react/prop-types */
import React from "react";
import {  Link } from "react-router-dom";


const TimeScroller = ({time}) => (

  <div>
    {
      time.map((year,key) =>{
        return(
          <div key = {key}>
            <Link to={`/${year}`} key = {key}>{year}</Link>
            <br />
          </div>
        )
      })
    }
  </div>

)
export default TimeScroller

