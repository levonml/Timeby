/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteOneTextSection } from "../redux/reducers/contentReducer";

const Text = ({text}) => {
  const user = useSelector(state=>state.currentUser.userName)

  //el.text.map((text) => console.log('dddddddddddd', text));
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
      dispatch(deleteOneTextSection(key, user))
    }
  }
  console.log("text from text", text)
  const editText = () => (alert('I appologise but this feature is still under developement, please try again later today or tomorrow: with love: Levon'))
  return (
    text.map((article, key) => {
      return(
        <div style = {style} key = {key} >
          <div>
            <div>{article}</div>
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