import React from "react"
import loginService from "../services/loginService"
import { useState } from "react"
import { useDispatch } from "react-redux"

const LoginForm = () =>{
  const style = {"margin": 100}
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
    <form style = {style} onSubmit = {loginHandler}>
      <div>login<input type="text" value={login} onChange={userNameHandler}></input></div>
      <div>password<input type="password" value={password} onChange = {passwordHandler}></input></div>
      <button type="submit">Login</button>
    </form>
		
  )
}
export default LoginForm