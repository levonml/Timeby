/* eslint-disable react/prop-types */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDropDown } from "../redux/reducers/navReducer"
import './stylesheets/navbar.css'
const Burger = () => {
  // const style = {
  //visibility: 'hidden',
  //opacity: 0,
    
  // }
  const dispatch = useDispatch()
  const dropDown = useSelector(state => state.dropDown)
  const dropdownHandle = () => {
    localStorage.setItem('dropDown', !dropDown)
    dispatch(setDropDown(!dropDown))
  }
  return (
    <button className = 'burger' onClick={dropdownHandle}>menu</button>
  )
}
export default Burger