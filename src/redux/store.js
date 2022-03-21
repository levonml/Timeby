import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./reducers/signinReducer";
import contentReducer from "./reducers/contentReducer";
import userReducer from "./reducers/userReducer";
import yearPageReducer from "./reducers/yearPageReducer";
import navReducer from "./reducers/navReducer";
import showUserReducer from "./reducers/showUserReducer";

const store = configureStore({
  reducer: {
    currentUser: signinReducer,
    currentUserData: contentReducer,
    currentYearPage: yearPageReducer,
    allUsers: userReducer,
    dropDown: navReducer,
    showUsers: showUserReducer,
  },
});
export default store;
