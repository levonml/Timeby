import { createSlice } from "@reduxjs/toolkit";
import contentService from "../../services/contentService";

let userData = [];
const userDataJSON = localStorage.getItem("currentUserData");
if (userDataJSON) {
  userData = JSON.parse(userDataJSON);
}
const initialState = userData;
const contentSlice = createSlice({
  name: "setText",
  initialState,
  reducers: {
    appendText(state, action) {
      return action.payload;
    },
    setText(state, action) {
      return action.payload;
    },
    appendYear(state, action) {
      return action.payload;
    },
  },
});

export const { appendText, setText, appendYear } = contentSlice.actions;

export const createText = (textObj, thisYear, user) => {
  return async (dispatch) => {
    try {
      const userData = await contentService.addText(textObj, thisYear, user);
      dispatch(setText(userData));
      return;
    } catch (err) {
      alert(err);
    }
  };
};
export const createYear = (yearObj, user) => {
  return async () => {
    try {
      await contentService.addYear(user, yearObj);
      initialize(user);
      //dispatch(appendYear(res));
      return;
    } catch (err) {
      alert(err);
    }
  };
};
export const deleteOneYear = (year, user) => {
  return async () => {
    try {
      await contentService.deleteOneYear(year, user);
      initialize(user);
    } catch (err) {
      alert(`deleteOneYear ${err}`);
    }
  };
};
export const deleteOneTextSection = (user, year, index) => {
  return async () => {
    try {
      await contentService.deleteOneTextSection(user, year, index);
      initialize(user);
    } catch (err) {
      alert(`deleteOneTextSection ${err}`);
    }
  };
};
export const initialize = (user) => {
  return async (dispatch) => {
    try {
      const res = await contentService.getOne(user);
      dispatch(setText(res));
    } catch (err) {
      console.log("getAll error", err);
    }
  };
};
export default contentSlice.reducer;
