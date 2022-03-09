import { createSlice } from '@reduxjs/toolkit'
import contentService from '../../services/contentService'
import userService from '../../services/userService'
import  {currentUser} from "../../halper/halper";
//import { useSelector } from 'react-redux';

const loggedUser = currentUser()
console.log("logggggeduserrrr", loggedUser)
const initialState = {
  text: [],
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
    setYear(state, action){
      return action.payload
    }
  }
})

export const {appendText, setText, appendYear} = contentSlice.actions

export const initialize = () => {
  return async dispatch => {
    const text = await userService.getOne(loggedUser)
    dispatch(setText(text.notes))
  }
}
export const createText = (textObj, currentUser) => {
  return async dispatch => {
    try{
      await contentService.addText(textObj, currentUser)
      const text = await userService.getOne(loggedUser)
      dispatch(appendText(text.notes))
      return
    }catch(err){alert(err)}
  }
}
export const createYear = (yearObj) => {
  return async dispatch => {
    try{
      await contentService.addYear(yearObj)
      const content = await userService.getOne(loggedUser)
      console.log("conteeeentd",content.notes)
      dispatch(appendYear(content.notes))
      return
    }catch(err){alert(err)}
  }
}
export const deleteOneTextSection = (id) => {
  console.log("id", id)
  return async (dispatch) => {
    try{
      await contentService.deleteOneTextSection(id)
      dispatch(initialize(loggedUser))
    }catch(err){alert(`deleteOneTextSection ${err}`)}
  }
}
export const initializeTimeline = () => {
  return async dispatch => {
    const timeLine = await userService.getOne(loggedUser)
    dispatch(setText(timeLine.notes))
  }
}
export default contentSlice.reducer