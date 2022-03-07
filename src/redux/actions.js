import * as actions from './actionTypes'
import loginService from '../services/loginService'
import contentService from '../services/contentService'
import userService from '../services/userService'
//import { useNavigate} from "react-router-dom"


export const signIn = (user) =>{
  return(
    {
      type: actions.SIGNIN, 
      payload: user
    }
  )
}
export const setText = (textObj) =>{
  console.log("lllllllllllllllllllllll", textObj);
  return(
    {
      type: actions.SETTEXT, 
      payload: textObj
    }
  )
}
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
  