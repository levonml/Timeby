import {SETTEXT} from '../actionTypes'

const initialState = {
  text: []
}


const contentReducer = (state = initialState, action) => {
  switch (action.type){
  case SETTEXT :{
    const ret = {
      ...state,
      text: action.payload
    }
    console.log("from reducer", ret);
    return ret
  }
  }
  return state
}
export default contentReducer