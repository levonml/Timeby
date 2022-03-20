import { createSlice } from "@reduxjs/toolkit";
import userService from "../../services/userService";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      return { users: action.payload };
    },
  },
});
export const { setUsers } = userSlice.actions;

export const getAll = () => {
  return async (dispatch) => {
    try {
      const allUsers = await userService.getAllUsers();
      dispatch(setUsers(allUsers));
    } catch (err) {
      alert(err);
    }
  };
};
export default userSlice.reducer;
