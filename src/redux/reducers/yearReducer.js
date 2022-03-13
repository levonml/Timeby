import { createSlice } from '@reduxjs/toolkit'

let year = null
const yearJSON =  localStorage.getItem('currentYear')
if (yearJSON) {
  year =  JSON.parse(yearJSON)
}
let yearId = null
const yearIdJSON =  localStorage.getItem('currentYearId')
if (yearJSON) {
  yearId =  JSON.parse(yearIdJSON)
}
const initialState = {
  year: year,
  yearId: yearId
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