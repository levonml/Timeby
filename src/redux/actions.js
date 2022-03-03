import * as actions from './actionTypes'

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