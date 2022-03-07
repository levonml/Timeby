import React from "react";
//import Header from "./Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import  {createText, initialize} from "../redux/reducers/contentReducer";
import Text from './Text'

const CurrentUserPage = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let currentUser = null
  const loggedUserJSON = window.localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    currentUser = JSON.parse(loggedUserJSON).data.Username

  }
  useEffect(() => {
    dispatch(initialize(currentUser))
  }, [])
  const signOut = () => {
    localStorage.clear()
    navigate('/')
    location.reload()
  }
  const createStory = async (event) =>{
    event.preventDefault()
    dispatch(createText({text : event.target.text.value}, currentUser))
    event.target.text.value = ("")
  }
  const text =  useSelector(state =>state.currentText)
  console.log("text from selector = ", text)
  console.log("textlllll", text);
 
  return(
    <>
      <h2>Hello {currentUser}</h2>
      <button onClick = {signOut}>sign out</button>
      <form onSubmit={createStory}>
        <div>create text <input name = "text"></input></div>
        <button type="submit">post</button>
      </form>
      {Array.isArray(text) ? text.map((el, key) => (<Text el = {el} key = {key}/>)) : <></>}
    </>
  )
}
export default CurrentUserPage