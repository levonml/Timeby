//import {SIGNIN} from '../actionTypes'
import { createSlice } from '@reduxjs/toolkit'
import contentService from '../../services/contentService'
import loginService from '../../services/loginService'

let currentUser = localStorage.getItem('loggedTimebyUser')
currentUser = currentUser ? JSON.parse(currentUser).data.Username : ""
const initialState = {
  userName: currentUser
}

const userSlice = createSlice({
  name: 'sigin',
  initialState,
  reducers: {
    signIn(state, action){
      return {userName : action.payload}
      //state.push({userName})
    }
  }
})
/* const userReducer = (state = initialState, action) => {
  switch (action.type){
  case SIGNIN :{
    const value = action.payload
    return {userName : value}
  }
  }
  return state
} */
export const {signIn} = userSlice.actions
export const logIn = ({login, password}) => {
  // const navigate = useNavigate()
  //console.log("--================")
  return async dispatch => {
    try{
      const user =  await loginService.login({login, password})
      // console.log("user iddd", user)
      if (user){
        localStorage.setItem(
          'loggedTimebyUser', JSON.stringify(user)
        )
        dispatch(signIn(user.data.Username))
        contentService.setToken(user.data.Token)
        // navigate(`/${user.data.Username}`)
      }
    }catch(err){alert('wrong password or username')}
  }
}
export default userSlice.reducer