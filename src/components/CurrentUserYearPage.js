import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import  {createText, initialize, deleteOneYear} from "../redux/reducers/contentReducer";
import Text from './Text'

const CurrentUserYearPage = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let thisYear = useSelector(state => state.currentYear.year)
  let loggedUser = useSelector(state => state.currentUser.userName)

  let yearId = useSelector(state => state.currentYear.yearId)
  let text=  useSelector(state =>  state.currentText)

  
  useEffect(() => {
    dispatch(initialize(loggedUser))
  }, [loggedUser])
  const createStory = async (event) =>{
    event.preventDefault()
    dispatch(createText({text : event.target.text.value}, thisYear, loggedUser, yearId))
    event.target.text.value = ("")
  }
  const deleteOneYearHandler = (event) => {
    event.preventDefault()
    if(window.confirm(`do you want to delete this page? All the information for the year ${thisYear} and this page will be deleted`)){
      dispatch(deleteOneYear(yearId, loggedUser))
      navigate(`/${loggedUser}/timeline`)
    }
  }
  if (Array.isArray(text)){
    text = text.filter(el => (el.year === thisYear && el.text.length))
  }
  console.log("filtered ", thisYear)

  return(
    <div>
      <h2>It is {thisYear} year now</h2>
      <form onSubmit={createStory}>
        <div>create text <br/><textarea className = "yearTextInput" name = "text"></textarea></div>
        <button type="submit">post</button>
      </form>
      {Array.isArray(text) ? text.map((el) => (<Text el = {el} key = {el.id} elId={el.id}/>)) : <></>}
      <button onClick = {deleteOneYearHandler}>delete this page</button>
    </div>
  )
}
export default CurrentUserYearPage