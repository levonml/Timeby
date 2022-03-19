import { createSlice } from '@reduxjs/toolkit'
import contentService from '../../services/contentService'
//import userService from '../../services/userService'
//import  {currentUser} from "../../halper/halper";


let userData = []
const userDataJSON =  localStorage.getItem('currentUserData')
console.log("currentUserData from reducer", userDataJSON)
if (userDataJSON) {
  userData =  JSON.parse(userDataJSON)
}
const initialState = {...userData}
/* {
    text:[],
    year:""
  } */

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
      const userData  = await contentService.addText(textObj, thisYear, user)
      console.log("after await res isss", userData )
     
      // const text = await contentService.getOne(user)
      // console.log("after await text isss", text?.notes )
      dispatch(setText(userData))
      return
    }catch(err){alert(err)}
  }
} 
export const createYear = (yearObj, user) => {
  return async dispatch => {
    try{
      const res = await contentService.addYear(user, yearObj)
      console.log("res from reducer", res?.content)
      dispatch(appendYear(res))
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
    //  console.log("gewfoooooooor, ferrrtttttttt")
      const res = await contentService.getOne(user)
     
      // console.log("ferrrtttttttt", res)
      dispatch(setText(res))
    }catch(err){console.log("getAll error", err)}
   
  }
}
export default contentSlice.reducer