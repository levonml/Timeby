import React from "react";
import { Link} from "react-router-dom";
//import { currentUser } from "../halper/halper";
//import { useSelector } from "react-redux";


const Timeline = () => {
  //const loggedUser = useSelector(state =>state.currentUser)
  let user = null
  const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    user =  JSON.parse(loggedUserJSON).data.Username
    console.log("lewkfkjfqnfqkj", user)
  }
  return (
    <div>
      {user ?
        <button><Link to={`/${user}/timeline`}>Time line</Link></button> :
        <></>}
     
    </div> 
  )
}
export default Timeline