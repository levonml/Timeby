import React from "react";
//import Header from "./Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import contentService from "../services/contentService";
//import userService from "../services/userService";

import  createText, {initialize} from "../redux/reducers/contentReducer";
//import { setText } from "../redux/actions";


const CurrentUserPage = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let currentUser = null //useSelector(state => state.currentUser.userName)
  const loggedUserJSON = window.localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    currentUser = JSON.parse(loggedUserJSON).data.Username

  }
  useEffect(() => {
    console.log("usssssssssssssssefeeeeeect")
    dispatch(initialize(currentUser))
  }, [])
  const signOut = () => {
    localStorage.clear()
    navigate('/')
    location.reload()
  }
  const createStory = async (event) =>{
    event.preventDefault()
    event.target.text.value = ("")
    dispatch(createText({text : event.target.text.value}, currentUser))
    /* try{
      await  contentService.addText({text:event.target.text.value})
      const text = await userService.getOne(currentUser)
      dispatch(setText(text.notes))
      // navigate(`/${currentUser}`)
      return
    }catch(err){alert(err)}
    event.target.text.value = ("")
     */
  }
  const text =  useSelector(state =>state.currentText)
  console.log("text from selector = ", text)
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
      <button onClick = {signOut}>sign out</button>
      <form onSubmit={createStory}>
        <div>create text <input name = "text"></input></div>
        <button type="submit">post</button>
      </form>
      {Array.isArray(text) ? text.map((el, key) => (<div style = {style}key = {key}>{el.text}</div>)) : <></>}
    </>
  )
}
export default CurrentUserPage