import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  year: String
}
const yearSlice = createSlice({
  name : 'setYear',
  initialState,
  reducers:{
    setYear(state, action){
      return action.payload
    }
  }
})

export const { setYear} = yearSlice.actions


export default yearSlice.reducer