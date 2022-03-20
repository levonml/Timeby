import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createText,
  initialize,
  deleteOneYear,
} from "../redux/reducers/contentReducer";
import Text from "./Text";

const CurrentUserYearPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let thisYearData = useSelector((state) => state.currentYearPage);
  let loggedUser = useSelector((state) => state.currentUser.userName);
  let userData = useSelector((state) => state.currentUserData);

  const thisYear = thisYearData.year;
  useEffect(() => {
    dispatch(initialize(loggedUser));
  }, [loggedUser]);
  const createStory = async (event) => {
    event.preventDefault();
    dispatch(
      createText({ text: event.target.text.value }, thisYear, loggedUser)
    );
    event.target.text.value = "";
  };
  const deleteOneYearHandler = (event) => {
    event.preventDefault();
    if (
      window.confirm(
        `do you want to delete this page? All the information for the year ${thisYear} and this page will be deleted`
      )
    ) {
      dispatch(deleteOneYear(thisYear, loggedUser));
      navigate(`/${loggedUser}/timeline`);
    }
  };
  let text = null;
  if (Array.isArray(userData) && userData.length) {
    text = userData.filter((el) => el.year === thisYear);
    text = text[0].text;
  }
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <h2>It is {thisYear} year now</h2>
      <form onSubmit={createStory}>
        <div>
          create text <br />
          <textarea className="yearTextInput" name="text"></textarea>
        </div>
        <button type="submit">post</button>
      </form>
      {Array.isArray(text) && text.length ? <Text text={text} /> : <></>}
      <div style={{}}>
        <button
          style={{ position: "absolute", right: "0", bottom: "0" }}
          onClick={deleteOneYearHandler}
        >
          delete this page
        </button>
      </div>
    </div>
  );
};
export default CurrentUserYearPage;
