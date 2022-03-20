import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./components/stylesheets/stylesheet.css";

import CurrentUserTimeline from "./components/CurrentUserTimeline";
import CurrentUserHomePage from "./components/CurrentUserHomePage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CurrentUserYearPage from "./components/CurrentUserYearPage";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import NavbarLogged from "./components/NavbarLogged";

const App = () => {
  document.body.style.backgroundColor = "#e7f9c5";
  const navBar = {
    background: "#698e5f",
    flexGrow: "1",
  };
  const mainContainer = {
    background: "#eaeac9",
  };

  const loggedUser = useSelector((state) => state.currentUser.userName);
  return (
    <BrowserRouter>
      <div className="mainContainer" style={mainContainer}>
        <nav style={navBar}>{loggedUser ? <NavbarLogged /> : <Navbar />}</nav>
        <AllUsers />
        <Routes>
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
    </BrowserRouter>
  );
};

export default App;
