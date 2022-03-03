import * as actions from './actionTypes'

export const signIn = (user) =>{
  return(
    {
      type: actions.SIGNIN, 
      payload: user
    }
  )
}