import React from "react"
import signupService from "../services/signupService"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const SignupForm = () =>{
  const style = {"marginTop": 200, "marginLeft": 500 }
  const [userName, setLogin] = useState("")
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
      const user = await  signupService.signup({userName, password, name, surname})
      dispatch({type: "LOGGED", payload: user.data.User})
    }catch(err){alert(err)}
    setLogin("")
    setPassword("")
    setName("")
    setSurname("")
  }

  return(
    <div>      
      <form style = {style} onSubmit = {signupHandler}>
        <div>name<input type="text" value={name} onChange={nameHandler}></input></div>
        <div>surname<input type="text" value={surname} onChange={surnameHandler}></input></div>
        <div>username<input type="text" value={userName} onChange={userNameHandler}></input></div>
        <div>password<input type="password" value={password} onChange = {passwordHandler}></input></div>
        <button type="submit">Sign up</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  )
}
export default SignupForm