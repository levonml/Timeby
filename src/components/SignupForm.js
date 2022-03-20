import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import signupService from "../services/signupService";

const SignupForm = () => {
  const [userName, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const navigate = useNavigate();
  const userNameHandler = (event) => {
    setLogin(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const surnameHandler = (event) => {
    setSurname(event.target.value);
  };

  const signupHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await signupService.signup({
        userName,
        password,
        name,
        surname,
      });
      if (res) {
        alert("you have signed up successfully");
        navigate("/login");
      }
    } catch (err) {
      alert("username is already taken");
    }
    setLogin("");
    setPassword("");
    setName("");
    setSurname("");
  };
  return (
    <div className="mainContainerLoginForm">
      <form onSubmit={signupHandler}>
        <div>
          name<input type="text" value={name} onChange={nameHandler}></input>
        </div>
        <div>
          surname
          <input type="text" value={surname} onChange={surnameHandler}></input>
        </div>
        <div>
          username
          <input
            type="text"
            value={userName}
            onChange={userNameHandler}
          ></input>
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={passwordHandler}
          ></input>
        </div>
        <button type="submit">Sign up</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  );
};
export default SignupForm;
