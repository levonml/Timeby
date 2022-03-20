import { createSlice } from "@reduxjs/toolkit";

let dropDown = null;
const dropDownJSON = localStorage.getItem("dropDown");
if (dropDownJSON) {
  dropDown = JSON.parse(dropDownJSON);
}
const initialState = {
  dropDown: dropDown ? dropDown : false,
};
const dropDownSlice = createSlice({
  name: "setDropDown",
  initialState,
  reducers: {
    setDropDown(state, action) {
      return action.payload;
    },
  },
});
export const { setDropDown } = dropDownSlice.actions;
export default dropDownSlice.reducer;
