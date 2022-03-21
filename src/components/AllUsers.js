import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/reducers/userReducer";

const AllUsers = () => {
  const [showUsers, setShowUsers] = useState(false);
  const dispatch = useDispatch();

  const allUsers = {
    position: "absolute",
    right: "4em",
    background: "none",
    border: "none",
    backgroundColor: "#505349",
    color: "white",
    fontSize: "0.7em",
    padding: "0.4em",
    zIndex: "5",
  };

  const allUsersList = {
    position: "fixed",
    top: "3.5em",
    padding: "0.5em",
    background: "grey",
    width: "6em",
    transition: "0.5s",
    transform: showUsers ? "translateX(0em)" : "translateX(-15em)",
    zIndex: "5",
  };

  const buttonText = showUsers ? "hide" : "Show who is in";
  const handleUsers = (event) => {
    event.preventDefault();
    setShowUsers(!showUsers);
    dispatch(getAll());
  };
  const userList = useSelector((state) => state.allUsers.users);
  return (
    <div>
      <button onClick={handleUsers} style={allUsers}>
        {buttonText}
      </button>
      <div style={allUsersList}>
        <div style={{ color: "white", fontFamily: "arial" }}>ALL USERS</div>
        {Array.isArray(userList) ? (
          userList.map((user) => <div key={user.id}>{user.name}</div>)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default AllUsers;
