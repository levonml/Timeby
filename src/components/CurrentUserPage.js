import React from "react";
//import Header from "./Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import contentService from "../services/contentService";

import { setText } from "../redux/actions";


const CurrentUserPage = () =>{
  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.currentUser.userName)
  useEffect(async () => {
    const text = await contentService.getAll()
    dispatch(setText(text))
  }, [])
  const createStory = async (event) =>{
    event.preventDefault()
    try{
      await  contentService.addText({text:event.target.text.value})
      const text = await contentService.getAll()
      console.log("ddddddddddddddddddd", text)
      dispatch(setText(text))
      // navigate(`/${user.data.Username}`)
      // return
    }catch(err){alert(err)}
    event.target.text.value = ("")
    
  }
  const text =  useSelector(state =>state.currentText.text)
  
  console.log("textlllll", text);
  const style = {"background": "gray", 
    'padding': 20, 
    "marginTop": 5, 
    "marginLeft":'auto',
    "marginRight":'auto',
    'color': 'white',
    'text': 'center',
    'width': 400
  }
  return(
    <>
      <h2>Hello {currentUser}</h2>
      <form onSubmit={createStory}>
        <div>create text <input name = "text"></input></div>
        <button type="submit">post</button>
      </form>
      {text.map((el, key) => (<div style = {style}key = {key}>{el.text}</div>))}
    </>
  )
}
export default CurrentUserPage