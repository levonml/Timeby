import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialize, createYear } from "../redux/reducers/contentReducer";
import Timeline from "./Timeline";
import "./stylesheets/stylesheet.css";

const CurrentUserTimeline = () => {
  const mainContainer = {
    marginTop: "2em",
  };
  const timelineStyle = {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    width: "700px",
  };
  const timelineContainer = {
    display: "flex",
    border: "none",
    width: "700",
  };
  let loggedUser = useSelector((state) => state.currentUser.userName);
  const timeline = useSelector((state) => state.currentUserData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialize(loggedUser));
  }, [loggedUser, timeline]);
  const addYear = async (event) => {
    event.preventDefault();
    let year = event.target.year.value;
    const yearExists = timeline.find((el) => el.year === year);
    if (isNaN(Number(year))) {
      alert("the value should be a number");
    } else if (year[0] === "-" || year[0] === "+") {
      alert("incurrect value");
    } else if (year.length > 4 || (year.length === 4 && year[0] > 2)) {
      alert("value is too big");
    } else if (yearExists) {
      alert(`year ${year} already exists`);
    } else if (!year) {
      alert("field is empty");
    } else {
      dispatch(createYear({ year: year }, loggedUser));
    }
    event.target.year.value = "";
  };
  let timelineSorted = null;
  if (Array.isArray(timeline)) {
    const items = [...timeline];
    timelineSorted = items.sort((a, b) => Number(a?.year) - Number(b?.year));
  }
  return (
    <div style={mainContainer}>
      <form onSubmit={addYear}>
        <div style={{ color: "white", fontFamily: "arial" }}>
          Add a year{" "}
          <input name="year" className="timelineAddYearInput"></input>
          <button className="timelineAddYearButton" type="submit">
            add
          </button>
        </div>
      </form>
      <div style={timelineContainer}>
        <div style={timelineStyle} className="scroller">
          {timelineSorted ? (
            timelineSorted.map((data, key) =>
              data ? (
                <Timeline data={data} key={data._id} />
              ) : (
                <div key={key}></div>
              )
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default CurrentUserTimeline;
