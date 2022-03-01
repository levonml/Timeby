import React from "react"
import signupService from "../services/signupService"
import { useState } from "react"
import { useDispatch } from "react-redux"

const SignupForm = () =>{
  const style = {"margin": 100}
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const dispatch = useDispatch()

  const userNameHandler = event => {
    setLogin(event.target.value)
  }
  const passwordHandler = event => {
    setPassword(event.target.value)
  }
  const nameHandler = event => {
    setName(event.target.value)
  }
  const surnameHandler = event => {
    setSurname(event.target.value)
  }
  const signupHandler = async (event) =>{
    event.preventDefault()
    try{
      const user = await  signupService.signup({login, password, name, surname})
      dispatch({type: "LOGGED", payload: user.data.User})
    }catch(err){alert(err)}
    setLogin("")
    setPassword("")
    setName("")
    setSurname("")
  }

  return(
    <form style = {style} onSubmit = {signupHandler}>
      <div>Name<input type="text" value={name} onChange={nameHandler}></input></div>
      <div>Surname<input type="text" value={surname} onChange={surnameHandler}></input></div>
      <div>login<input type="text" value={login} onChange={userNameHandler}></input></div>
      <div>password<input type="password" value={password} onChange = {passwordHandler}></input></div>
      <button type="submit">Sign up</button>
    </form>
		
  )
}
export default SignupForm