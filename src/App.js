import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./components/stylesheets/stylesheet.css";
import Image from "./img/timeBySpace.jpg";
import CurrentUserTimeline from "./components/CurrentUserTimeline";
import CurrentUserHomePage from "./components/CurrentUserHomePage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CurrentUserYearPage from "./components/CurrentUserYearPage";
import AllUsersList from "./components/AllUsersList";
import Navbar from "./components/Navbar";
import NavbarLogged from "./components/NavbarLogged";
import FrontPage from "./components/FrontPage";

const App = () => {
  //document.body.style.backgroundColor = "#e7f9c5";

  document.body.style.background = `url(${Image})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundAttachment = "fixed";

  const navBar = {
    background: "none",
    opacity: "0.9",
    //flexGrow: "1",
    padding: "0.3em 0",
  };
  const mainContainer = {
    //background: "#eaeac9",
    // backgroundImage: "url(./timeBySpace.jpg)",
  };

  const loggedUser = useSelector((state) => state.currentUser.userName);
  return (
    <BrowserRouter>
      <div style={mainContainer}>
        <div style={{ position: "relative", zIndex: "2" }}>
          <nav style={navBar}>{loggedUser ? <NavbarLogged /> : <Navbar />}</nav>
        </div>
        <div className="mainContainer">
          <AllUsersList />
          <Routes>
            <Route exact path="/" element={<FrontPage />} />
            <Route exact path="login" element={<LoginForm />} />
            <Route exact path="signup" element={<SignupForm />} />
            <Route
              exact
              path={`/:userName/home`}
              element={<CurrentUserHomePage />}
            />
            <Route
              path={`/:userName/timeline/:year`}
              element={loggedUser ? <CurrentUserYearPage /> : <>loading...</>}
            />
            <Route
              path={`/:userName/timeline/*`}
              element={loggedUser ? <CurrentUserTimeline /> : <></>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
