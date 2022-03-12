import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {createText, initialize} from "../redux/reducers/contentReducer";
import Text from './Text'

const CurrentUserYearPage = () =>{
  const dispatch = useDispatch()

  let thisYear = useSelector(state => state.currentYear.year)
  let loggedUser = useSelector(state => state.currentUser.userName)
  let text=  useSelector(state =>  state.currentText)
  
  useEffect(() => {
    dispatch(initialize(loggedUser))
  }, [loggedUser])
  const createStory = async (event) =>{
    event.preventDefault()
    dispatch(createText({text : event.target.text.value}, thisYear, loggedUser))
    event.target.text.value = ("")
  }

  if (Array.isArray(text)){
    text = text.filter(el => (el.year === thisYear && el.text.length))
  }
  console.log("filtered ", thisYear)

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
export default CurrentUserYearPage