import React from "react";
//import Header from "./Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {createText, initialize} from "../redux/reducers/contentReducer";
import Text from './Text'
import { currentYear, currentUser} from "../halper/halper";



const CurrentUserPage = () =>{
  const thisYear = currentYear()
  console.log("kkkkkkkkk", thisYear)
  const loggedUser = currentUser()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialize())
  }, [])
  
  const createStory = async (event) =>{
    event.preventDefault()
    dispatch(createText({text : event.target.text.value}, thisYear))
    event.target.text.value = ("")
  }
  let text =  useSelector(state =>state.currentText)
  console.log("text from selector = ", text)

  text = text.filter(el => el.year === thisYear)
  console.log("text from selector after filter = ", text)
  console.log("year selector = ", currentYear)


 
  return(
    <>
      <h2>Hello {loggedUser}</h2>
      <form onSubmit={createStory}>
        <div>create text <input name = "text"></input></div>
        <button type="submit">post</button>
      </form>
      {Array.isArray(text) ? text.map((el) => (<Text el = {el} key = {el.id} elId={el.id}/>)) : <></>}
    </>
  )
}
export default CurrentUserPage