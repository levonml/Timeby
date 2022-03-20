import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import  {createText, initialize, deleteOneYear} from "../redux/reducers/contentReducer";
import Text from './Text'

const CurrentUserYearPage = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let thisYearData = useSelector(state => state.currentYearPage)
  let loggedUser = useSelector(state => state.currentUser.userName)
  let userData=  useSelector(state =>  state.currentUserData)
  //let text = thisYearData.text
  console.log("before filtered thisYear _______ ", thisYearData.year)
  console.log("before filtered text _______ ", userData)
  const thisYear = thisYearData.year
  useEffect(() => {
    console.log("inside useEffect")
    dispatch(initialize(loggedUser))
  }, [loggedUser])
  const createStory = async (event) =>{
    event.preventDefault()
    dispatch(createText({text : event.target.text.value}, thisYear, loggedUser))
    event.target.text.value = ("")
  }
  const deleteOneYearHandler = (event) => {
    event.preventDefault()
    if(window.confirm(`do you want to delete this page? All the information for the year ${thisYear} and this page will be deleted`)){
      dispatch(deleteOneYear(thisYear, loggedUser))
      navigate(`/${loggedUser}/timeline`)
    } 
  }
  let text = null
  if (Array.isArray(userData) && userData.length){
    text = userData.filter(el => (el.year === thisYear))
    console.log("lllll", text)
    text = text[0].text
  }
  console.log("filtered text ", text)
  console.log("this yearrrr ", thisYear)

  return(
    <div>
      <h2>It is {thisYear} year now</h2>
      <form  onSubmit={createStory} >
        <div>create text <br/><textarea className = "yearTextInput" name = "text"></textarea></div>
        <button type="submit">post</button>
      </form>
      {Array.isArray(text) && text.length ? <Text text = {text}/> : <></>} 
      <button  onClick = {deleteOneYearHandler} >delete this page</button>
    </div>
  )
}
export default CurrentUserYearPage