import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link} from "react-router-dom"
import {logIn} from '../redux/reducers/userReducer'
import { useNavigate } from "react-router-dom"

const LoginForm = () =>{
  const style = {"marginTop": 200, "marginLeft": 500 }
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  let currentUser = null
  const loggedUserJSON = localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    currentUser = JSON.parse(loggedUserJSON).data.Username
  }
  const userNameHandler = event => {
    setLogin(event.target.value)
  }
  const passwordHandler = event => {
    setPassword(event.target.value)
  }

  const loginHandler = async (event) =>{ 
    event.preventDefault()
   
    if (currentUser){
      alert("you are already logged on") 
      navigate(`/${currentUser}`)

    }else{
      setLogin("")
      setPassword("")
      dispatch(logIn({login, password}))
      navigate(`/${login}`)

    }
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