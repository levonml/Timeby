import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteOneTextSection } from "../redux/reducers/contentReducer";

const Text = ({ text }) => {
  const user = useSelector((state) => state.currentUser.userName);
  const year = useSelector((state) => state.currentYearPage.year);
  const style = {
    background: "gray",
    padding: 20,
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    opacity: "2",
    text: "center",
    width: "auto",
  };
  const buttonStyle = {
    marginTop: 25,
  };
  const dispatch = useDispatch();
  const deleteOne = (index) => {
    if (window.confirm("do you want to delete the text?")) {
      dispatch(deleteOneTextSection(user, year, index));
    }
  };
  const editText = () =>
    alert(
      "I appologise but this feature is still under developement, please try again later today or tomorrow: with love: Levon"
    );
  return text.map((article, index) => {
    return (
      <div style={style} key={index}>
        <div>
          <div>{article}</div>
        </div>
        <div style={buttonStyle}>
          <button onClick={() => deleteOne(index)}>delete</button>
          <button onClick={editText}>edit</button>
        </div>
      </div>
    );
  });
};
export default Text;
