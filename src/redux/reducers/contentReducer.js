import { createSlice } from '@reduxjs/toolkit'
import contentService from '../../services/contentService'
import userService from '../../services/userService'
//import  {currentUser} from "../../halper/halper";


let userText = null
const userTextJSON =  localStorage.getItem('currentText')
if (userTextJSON) {
  userText =  JSON.parse(userTextJSON)
}
const initialState = {
  text: userText
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

export const createText = (textObj, thisYear, user, id) => {
  console.log("this year from ", thisYear)
  return async dispatch => {
    try{
      await contentService.addText(textObj, thisYear, user, id)
     
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
      dispatch(appendYear(content.notes))
      return
    }catch(err){alert(err)}
  }
}
export const deleteOneYear = (yearId, user) => {
  return async (dispatch) => {
    try{
      await contentService.deleteOneYear(yearId)
      dispatch(initialize(user))
    }catch(err){alert(`deleteOneYear ${err}`)}
  }
}
export const deleteOneTextSection = (yearId, key, user) => {
  return async (dispatch) => {
    try{
      await contentService.deleteOneTextSection(yearId, key)
      dispatch(initialize(user))
    }catch(err){alert(`deleteOneTextSection ${err}`)}
  }
}
export const initialize = (user) => {
  return async dispatch => {
    try{
      const res = await userService.getOne(user)
      dispatch(setText(res.notes))
    }catch(err){console.log("getAll error", err)}
   
  }
}
export default contentSlice.reducer