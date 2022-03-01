const initialState = {
  userName: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
  case 'LOGGED' :{
    const value = action.payload
    return {userName : value}
  }
  }
  return state
}
export default userReducer