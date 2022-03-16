import React from "react";
import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  { initialize, createYear} from "../redux/reducers/contentReducer";
import Timeline from './Timeline'

const CurrentUserTimeline = () =>{
  // const [year, setYear] = useState("")
  const timelineStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '700px'
  }
  const timelineContainer = {
    display: 'flex',
    overflow: 'scroll',
    width: '700'

  }
  let loggedUser = useSelector(state => state.currentUser.userName)
  const timeline =  useSelector(state =>state.currentText)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialize(loggedUser))
  }, [loggedUser]) 
  
  const addYear = async (event) =>{
    event.preventDefault()
    let year = event.target.year.value
    dispatch(createYear({year : year}, loggedUser))
    event.target.year.value = ""
  }
  let timelineSorted = null
  if (Array.isArray(timeline)){
    const items = [...timeline] 
    timelineSorted = items.sort((a, b) => Number(a.year) - Number(b.year))
  }
  console.log("timeLine =", timelineSorted);
  return(
    <>
      <form onSubmit={addYear}>
        <div>Add a year <input name = "year" ></input></div>
        <button type="submit">add</button>
      </form>
      <div style = {timelineContainer}>
        <div style = {timelineStyle}>
          {timelineSorted ? timelineSorted.map((el) => (<Timeline year = {el.year} key = {el.id} yearId={el.id}/>)) : <></>}
        </div>
      </div>
    </>
  )
}
export default CurrentUserTimeline