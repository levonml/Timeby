import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialize, createYear } from "../redux/reducers/contentReducer";
import Timeline from "./Timeline";

const CurrentUserTimeline = () => {
  const timelineStyle = {
    display: "flex",
    flexDirection: "row",
    width: "700px",
  };
  const timelineContainer = {
    display: "flex",
    overflow: "scroll",
    width: "700",
  };
  let loggedUser = useSelector((state) => state.currentUser.userName);
  const timeline = useSelector((state) => state.currentUserData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialize(loggedUser));
  }, [loggedUser]);
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
    <>
      <form onSubmit={addYear}>
        <div>
          Add a year <input name="year"></input>
        </div>
        <button type="submit">add</button>
      </form>
      <div style={timelineContainer}>
        <div style={timelineStyle}>
          {timelineSorted ? (
            timelineSorted.map((data, key) =>
              data ? (
                <Timeline data={data} curretnUser={loggedUser} key={data._id} />
              ) : (
                <div key={key}></div>
              )
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
export default CurrentUserTimeline;
