import React from "react";
//import Header from "./Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  { initializeTimeline, createYear} from "../redux/reducers/contentReducer";
import Timeline from './Timeline'
import { currentUser } from "../halper/halper";


const CurrentUserTimeline = () =>{

  const timelineStyle = {
    display: 'flex',
  }
  const loggedUser = currentUser()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeTimeline())
  }, [])
  
  const addYear = async (event) =>{
    event.preventDefault()
    dispatch(createYear({year : event.target.year.value}, loggedUser))
    event.target.year.value = ("")
  }
  const timeline =  useSelector(state =>state.currentText)
  console.log("aaaaaaaaaaaa", timeline);
  let timelineSorted = null
  if (Array.isArray(timeline)){
    const items = [...timeline] 
    timelineSorted = items.sort((a, b) => Number(a.year) - Number(b.year))
  }
  return(
    <>
      <form onSubmit={addYear}>
        <div>Add a year <input name = "year"></input></div>
        <button type="submit">add</button>
      </form>
      <div style = {timelineStyle}>
        {timelineSorted ? timelineSorted.map((el) => (<Timeline year = {el.year} key = {el.id} yearId={el.id}/>)) : <></>}
      </div>
    </>
  )
}
export default CurrentUserTimeline