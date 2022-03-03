import React from "react";
import {useSelector} from 'react-redux'
import TimeScroller from "./TimeScroller";

// eslint-disable-next-line react/prop-types
const Header = ({time}) => {
  const currentUser = useSelector(state => state.currentUser.userName)
  return (
    <div style = {{'position': 'absolute', 'top': 80, 'left': 50}}>
      <h1>TimeBy {currentUser}</h1>
      <TimeScroller time = {time}/>
    </div>
  )
}
export default Header