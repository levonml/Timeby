import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./reducers/signinReducer";
import contentReducer from "./reducers/contentReducer"
import userReducer from "./reducers/userReducer";
import yearReducer from "./reducers/yearReducer";
import navReducer from "./reducers/navReducer";

const store = configureStore({
  reducer:{
    currentUser: signinReducer,
    currentText: contentReducer,
    currentYear: yearReducer,
    allUsers : userReducer,
    dropDown: navReducer
  }
})
export default store