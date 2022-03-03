import {SIGNIN} from '../actionTypes'

const initialState = {
  userName: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
  case SIGNIN :{
    const value = action.payload
    return {userName : value}
  }
  }
  return state
}
export default userReducer