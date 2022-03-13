import { createSlice } from '@reduxjs/toolkit'
import loginService from '../../services/loginService'
//import {currentUser} from "../../halper/halper"

let user = null
let id = null
const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
if (loggedUserJSON) {
  user =  JSON.parse(loggedUserJSON).data.Username
  id = JSON.parse(loggedUserJSON).data.id
}
const initialState = {
  userName: user,
  id: id
} 
const userSlice = createSlice({
  name: 'sigin',
  initialState,
  reducers: {
    signIn(state, action){
      return {userName : action.payload.Username, id:action.payload.id }
    }
  }
})

export const {signIn} = userSlice.actions

export const logIn = ({login, password}) => {
  return async dispatch => {
    try{
      const user =  await loginService.login({login, password})
      console.log("oooooooo", user)
      if (user){
        localStorage.setItem(
          'loggedTimebyUser', JSON.stringify(user)
        )
        dispatch(signIn(user.data))
      }
    }catch(err){alert('wrong password or username')}
  }
}

export default userSlice.reducer