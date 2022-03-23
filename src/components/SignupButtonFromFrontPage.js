import React from "react";
import { useNavigate } from "react-router-dom";

import "./stylesheets/stylesheet.css";

const SignupButtonFromFrontPage = () => {
  const navigate = useNavigate();
  return (
    <div className="signupButtonFromFrontPage">
      <button onClick={() => navigate("/signup")}>Sign up</button>
    </div>
  );
};
export default SignupButtonFromFrontPage;
