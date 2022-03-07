//import {SETTEXT} from '../actionTypes'
import { createSlice } from '@reduxjs/toolkit'
//import LoginForm from '../../components/LoginForm'
import contentService from '../../services/contentService'
import userService from '../../services/userService'

const initialState = {
  text: []
}
const contentSlice = createSlice({
  name : 'setText',
  initialState,
  reducers:{
    appendText(state, action){
      const text = action.payload
      state.push({
        text
      })
    },
    setText(state, action){
      return action.payload
    }
  }
})

/* const contentReducer = (state = initialState, action) => {
  switch (action.type){
  case SETTEXT :{
    const ret = {
      ...state,
      text: action.payload
    }
    console.log("from reducer", ret);
    return ret
  }
  }
  return state
} */
export const {appendText, setText} = contentSlice.actions
export const initialize = (currentUser) => {
  return async dispatch => {
    const text = await userService.getOne(currentUser)
    console.log("txthhhhhhhh", text.notes);
    dispatch(setText(text.notes))
  }
}
export const createText = (obj, currentUser) => {
  return async dispatch => {
    try{
      await  contentService.addText(obj)
      const text = await userService.getOne(currentUser)
      dispatch(setText(text.notes))
      // navigate(`/${currentUser}`)
      return
    }catch(err){alert(err)}
  }
}
export default contentSlice.reducer