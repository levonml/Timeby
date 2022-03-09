/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";

import { deleteOneTextSection } from "../redux/reducers/contentReducer";

const Text = ({el, elId}) => {
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
  //const id = useSelector(state => state.currentUser)
  console.log("iddddddddd---", elId);
  const dispatch = useDispatch()
  const deleteOne = () => {
    if(window.confirm('do you want to delete the text?')){
      dispatch(deleteOneTextSection(elId))}
  }
  const editText = () => (alert('I appologise but this feature is still under developement, please try again later today or tomorrow: with love: Levon'))
  return (
    <div style = {style} >
      <div>
        {el.text}
      </div>
      <div style = {buttonStyle}>
        <button onClick={deleteOne}>delete</button>
        <button onClick = {editText}>edit</button>
      </div>
      
    </div>
  )
}
export default Text