import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./reducers/signinReducer";
import contentReducer from "./reducers/contentReducer"
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer:{
    currentUser: signinReducer,
    currentText: contentReducer,
    allUsers : userReducer
  }
})
export default store