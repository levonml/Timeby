/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteOneTextSection } from "../redux/reducers/contentReducer";

const Text = ({el, key}) => {
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
  const id = useSelector(state => state.currentUser.id)
  console.log("iddddddddd---", id);
  const dispatch = useDispatch(deleteOneTextSection(id))
  const deleteOne = () => {
    dispatch(deleteOne)
  }
  return (
    <div style = {style} key = {key}>
      <div>
        {el.text}
      </div>
      <div style = {buttonStyle}>
        <button onClick={deleteOne}>delete</button>
        <button>edit</button>
      </div>
      
    </div>
  )
}
export default Text