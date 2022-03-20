import { createSlice } from "@reduxjs/toolkit";

let yearPage = null;
const yearPageJSON = localStorage.getItem("currentYearPage");
if (yearPageJSON) {
  yearPage = JSON.parse(yearPageJSON);
}
const initialState = yearPage;
const yearPageSlice = createSlice({
  name: "setYear",
  initialState,
  reducers: {
    setYearPage(state, action) {
      return action.payload;
    },
  },
});
export const { setYearPage } = yearPageSlice.actions;
export default yearPageSlice.reducer;
