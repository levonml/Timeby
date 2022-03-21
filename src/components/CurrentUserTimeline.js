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
    if (yearExists) {
      alert(`year ${year} already exists`);
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
          Add a year <input name="year"></input>
          <button type="submit">add</button>
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
