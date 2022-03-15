/* eslint-disable react/prop-types */
import React from "react"
import './stylesheet.css'
const Burger = ({setDowndrop, downdrop}) => {
  // const style = {
  //visibility: 'hidden',
  //opacity: 0,
    
  // }
  const downDrop = () => setDowndrop(!downdrop)
  return (
    <button className = 'burger' onClick={downDrop}>menu</button>
  )
}
export default Burger