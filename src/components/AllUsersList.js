import React from "react";
import { setShowUsers } from "../redux/reducers/showUserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AllUsersList = () => {
  const [hideButton, setHideButton] = useState("1");
  const showUsers = useSelector((state) => state.showUsers);
  console.log("state is ", showUsers);
  const listContainer = {
    borderRadius: "0.5em",
    position: "fixed",
    top: "4em",
    right: "0",
    padding: "1em",
    paddingRight: "2em",
    background: "rgb(46, 33, 80)",
    opacity: "0.9",
    width: "6em",
    transition: "0.5s",
    transform: !showUsers ? "translateX(1em)" : "translateX(20em)",
    zIndex: "5",
  };
  const togleButton = {
    background: "black",
    //opacity: "0.5",
    border: "none",
    color: "white",
    fontSize: "0.8em",
    padding: "0.4em 1em",
    borderRadius: "0.4em",
    marginTop: "0.5em",
    // zIndex: "5",
    transform: `scale(${hideButton})`,
  };
  const dispatch = useDispatch();
  const handleUsers = (event) => {
    event.preventDefault();
    dispatch(setShowUsers(!showUsers));
  };
  const userList = useSelector((state) => state.allUsers.users);

  return (
    <div style={listContainer}>
      <div
        style={{
          color: "white",
          fontFamily: "arial",
          paddingBottom: "1em",
          fontWeight: "bold",
        }}
      >
        ALL USERS
      </div>
      {Array.isArray(userList) ? (
        userList.map((user) => (
          <div key={user.id} style={{ fontFamily: "arial", color: "white" }}>
            {user.name}
          </div>
        ))
      ) : (
        <></>
      )}
      <button
        onClick={handleUsers}
        onMouseEnter={() => setHideButton("1.1")}
        onMouseLeave={() => setHideButton("1")}
        style={togleButton}
      >
        hide
      </button>
    </div>
  );
};
export default AllUsersList;
