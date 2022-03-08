import React from "react";
import { Link } from "react-router-dom";

import { currentUser } from "../halper/halper";


const SignupButton = () => (
  <div>
    {currentUser() ?
      <></>:
      <button><Link to = "/signup">Sign up</Link></button>
    }
  </div>
)

export default SignupButton