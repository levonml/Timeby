import React from "react";
import { Link } from "react-router-dom";
import { currentUser } from "../halper/halper";

const HomeButton = () => (
  <div>
    {currentUser() ?
      <button><Link to = {currentUser()}>Home</Link></button>:
      <></>
      
    }
  </div>
)

export default HomeButton