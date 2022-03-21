import { createSlice } from "@reduxjs/toolkit";

let showUsers = null;
const showUsersJSON = localStorage.getItem("showUsers");
if (showUsersJSON) {
  showUsers = JSON.parse(showUsersJSON);
}
console.log("setshowwwww", showUsers);
const initialState = {
  showUsers: showUsers ? showUsers : false,
};
const showUserSlice = createSlice({
  name: "setShowUser",
  initialState,
  reducers: {
    setShowUsers(state, action) {
      return action.payload;
    },
  },
});
export const { setShowUsers } = showUserSlice.actions;
export default showUserSlice.reducer;
