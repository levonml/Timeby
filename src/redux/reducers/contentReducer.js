import { createSlice } from '@reduxjs/toolkit'
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
      return action.payload
    },
    setText(state, action){
      return action.payload
    }
  }
})

export const {appendText, setText} = contentSlice.actions

export const initialize = (currentUser) => {
  return async dispatch => {
    const text = await userService.getOne(currentUser)
    dispatch(setText(text.notes))
  }
}
export const createText = (obj, currentUser) => {
  return async dispatch => {
    try{
      await contentService.addText(obj)
      const text = await userService.getOne(currentUser)
      dispatch(appendText(text.notes))
      return
    }catch(err){alert(err)}
  }
}
export const deleteOneTextSection = (id) => {
  return async dispatch => {
    try{
      await contentService.deleteOneTextSection(id)
      const textList = await contentService.getAll()
      dispatch(setText(textList))
    }catch(err){alert(`deleteOneTextSection ${err}`)}
  }
}
export default contentSlice.reducer