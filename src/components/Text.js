/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";

import { deleteOneTextSection } from "../redux/reducers/contentReducer";

const Text = ({el, elId}) => {
  console.log("sssssss", el)
  el.text.map((text) => console.log('dddddddddddd', text));
  const style = {"background": "gray", 
    'padding': 20, 
    "marginTop": 5, 
    "marginLeft":'auto',
    "marginRight":'auto',
    'color': 'white',
    'text': 'center',
    'width': 400
  }
  const buttonStyle = {
    "marginTop":25,
  }
  const dispatch = useDispatch()
  const deleteOne = (key) => {
    if(window.confirm('do you want to delete the text?')){
      dispatch(deleteOneTextSection(elId, key))
    }
  }
  const editText = () => (alert('I appologise but this feature is still under developement, please try again later today or tomorrow: with love: Levon'))
  return (
    el.text.map((text, key) => {
      return(
        <div style = {style}  key ={key}>
          <div>
            <div>{text}</div>
          </div>
          <div style = {buttonStyle}>
            <button onClick={() => deleteOne(key)}>delete</button>
            <button onClick = {editText}>edit</button>
          </div>
        </div>)
    })

  )
}
export default Text