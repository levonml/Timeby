import React from "react";

import SignupButtonFromFrontPage from "./SignupButtonFromFrontPage";
import "./stylesheets/stylesheet.css";

const FrontPage = () => {
  return (
    <div>
      <div className="frontPageMainContainer">
        <div className="one">Write your own narrative</div>
        <div className="two">Explore</div>
        <div className="three">Inspire</div>
        <div className="four"></div>
      </div>
      <SignupButtonFromFrontPage />
    </div>
  );
};
export default FrontPage;
