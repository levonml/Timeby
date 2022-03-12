import { createSlice } from '@reduxjs/toolkit'
import contentService from '../../services/contentService'
import userService from '../../services/userService'
//import  {currentUser} from "../../halper/halper";


let loggedUser = null
const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
if (loggedUserJSON) {
  loggedUser =  JSON.parse(loggedUserJSON).data.Username
}
let userText = null
const userTextJSON =  localStorage.getItem('currentText')
if (userTextJSON) {
  userText =  JSON.parse(userTextJSON)
}
const initialState = {
  text: userText,
  year: []
}
const contentSlice = createSlice({
  name : 'setText',
  initialState,
  reducers:{
    appendText(state, action){
      return action.payload
    },
    setText(state, action){
      return action.payload
    },
    appendYear(state, action){
      return action.payload
    },
  }
})

export const {appendText, setText, appendYear} = contentSlice.actions

export const createText = (textObj, thisYear, user) => {
  console.log("this year from ", thisYear)
  return async dispatch => {
    try{
      await contentService.addText(textObj, thisYear, user)
     
      const text = await userService.getOne(user)
      console.log("after await text isss", text.notes )
      dispatch(setText(text.notes))
      return
    }catch(err){alert(err)}
  }
}
export const createYear = (yearObj, user) => {
  return async dispatch => {
    try{
      await contentService.addYear(yearObj)
      const content = await userService.getOne(user)
      console.log("loggedUser", loggedUser)
      console.log("notenotentoe", content)
      dispatch(appendYear(content.notes))
      return
    }catch(err){alert(err)}
  }
}
export const deleteOneTextSection = (id, key) => {
  console.log("id", id)
  return async (dispatch) => {
    try{
      await contentService.deleteOneTextSection(id, key)
      dispatch(initialize(loggedUser))
    }catch(err){alert(`deleteOneTextSection ${err}`)}
  }
}
export const initialize = (user) => {
  return async dispatch => {
    const timeLine = await userService.getOne(user)
    dispatch(setText(timeLine.notes))
  }
}
export default contentSlice.reducer