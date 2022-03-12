import { createSlice } from '@reduxjs/toolkit'
import loginService from '../../services/loginService'
import {currentUser} from "../../halper/halper"

const initialState = {
  userName: currentUser(),
} 
const userSlice = createSlice({
  name: 'sigin',
  initialState,
  reducers: {
    signIn(state, action){
      return {userName : action.payload}
    }
  }
})

export const {signIn} = userSlice.actions

export const logIn = ({login, password}) => {
  return async dispatch => {
    try{
      const user =  await loginService.login({login, password})
      if (user){
        localStorage.setItem(
          'loggedTimebyUser', JSON.stringify(user)
        )
        dispatch(signIn(user.data.Username))
      }
    }catch(err){alert('wrong password or username')}
  }
}

export default userSlice.reducer