import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../redux/reducers/signinReducer";
import { useNavigate } from "react-router-dom";
import "./stylesheets/stylesheet.css";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let loggedUser = useSelector((state) => state.currentUser.userName);
  const userNameHandler = (event) => {
    setLogin(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = async (event) => {
    event.preventDefault();
    if (loggedUser) {
      alert("you are already logged on");
      navigate(`/${loggedUser}`);
    } else {
      setLogin("");
      setPassword("");
      dispatch(logIn({ login, password }));
      if (login && password) {
        navigate(`/${login}/home`);
      }
    }
  };
  return (
    <div className="mainContainerLoginForm">
      <form onSubmit={loginHandler}>
        <div>
          login
          <input type="text" value={login} onChange={userNameHandler}></input>
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={passwordHandler}
          ></input>
        </div>
        <button type="submit">Login</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  );
};
export default LoginForm;
