import React from "react";
import { Link } from "react-router-dom";
import { currentUser } from "../halper/halper";


const Timeline = () => {

  return (
    <div>
      <button><Link to={`${currentUser()}/timeline`}>Time line</Link></button>
    </div>
  )
}
export default Timeline