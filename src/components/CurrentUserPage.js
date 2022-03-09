import React from "react";
//import Header from "./Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {createText, initialize} from "../redux/reducers/contentReducer";
import Text from './Text'
import { currentUser } from "../halper/halper";


const CurrentUserPage = () =>{
  const loggedUser = currentUser()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialize())
  }, [])
  
  const createStory = async (event) =>{
    event.preventDefault()
    dispatch(createText({text : event.target.text.value}))
    event.target.text.value = ("")
  }
  const surprise = () => (alert("HAPPY 8th of MARCH BUBUUUUUUUU, love you, kiss you hug you, muah muah muah,"))
  const text =  useSelector(state =>state.currentText)
  console.log("text from selector = ", text)
 
  return(
    <>
      <h2>Hello {loggedUser}</h2>
      {loggedUser === "Kuty" ?
        <div>
          <h3>You have a special surprise from bubu2</h3>
          <h4>press the botton to claim it!</h4>
          <button onClick={surprise}>get your surprise here</button>
        </div> : <></>}
      <form onSubmit={createStory}>
        <div>create text <input name = "text"></input></div>
        <button type="submit">post</button>
      </form>
      {Array.isArray(text) ? text.map((el) => (<Text el = {el} key = {el.id} elId={el.id}/>)) : <></>}
    </>
  )
}
export default CurrentUserPage