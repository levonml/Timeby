import React from "react"
import loginService from "../services/loginService"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const LoginForm = () =>{
  const style = {"marginTop": 200, "marginLeft": 500 }
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const userNameHandler = event => {
    setLogin(event.target.value)
  }
  const passwordHandler = event => {
    setPassword(event.target.value)
  }
  const loginHandler = async (event) =>{
    event.preventDefault()
    const user = await  loginService.login({login, password})
    dispatch({type: "LOGGED", payload: user.data.User})

    setLogin("")
    setPassword("")
  }

  return(
    <div>
      
      <form style = {style} onSubmit = {loginHandler}>
        <div>login<input type="text" value={login} onChange={userNameHandler}></input></div>
        <div>password<input type="password" value={password} onChange = {passwordHandler}></input></div>
        <button type="submit">Login</button>
        <Link to="/">Back</Link>

      </form>
    </div>
  )
}
export default LoginForm