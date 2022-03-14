import React, { useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/reducers/userReducer";


const AllUsers = () => {
  const allUsers = {
    position: 'absolute',
    right: '5em'
  }
  const [showUsers, setShowUsers] = useState(false)
  const dispatch = useDispatch()

  const buttonText = showUsers ? "hide" : "Show who is in"
  const handleUsers = () => {
    setShowUsers(!showUsers)
    dispatch(getAll())
  }
  const userList = useSelector(state => state.allUsers.users )
  console.log("userlist from selector", userList);
  return (
    <div  style = {allUsers}>
      <button onClick = {handleUsers} >{buttonText}</button>
      {Array.isArray(userList) && showUsers ? userList.map((user) => <div key = {user.id}>{user.name}</div>) : <></>}
    </div>
  )
}
export default AllUsers