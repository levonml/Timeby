import React from "react"
import loginService from "../services/loginService"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate} from "react-router-dom"
import {signIn} from '../redux/actions'
import contentService from '../services/contentService'

const LoginForm = () =>{
  const style = {"marginTop": 200, "marginLeft": 500 }
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userNameHandler = event => {
    setLogin(event.target.value)
  }
  const passwordHandler = event => {
    setPassword(event.target.value)
  }
  const loginHandler = async (event) =>{
    event.preventDefault()
    try{
      const user = await  loginService.login({login, password})
      window.localStorage.setItem(
        'loggedTimebyUser', JSON.stringify(user)
      ) 
      /* const loggedUserJSON = window.localStorage.getItem('loggedTimebyUser')
      if (loggedUserJSON) {
        const currUser = JSON.parse(loggedUserJSON)
	  } */
      dispatch(signIn(user.data.Username))
      navigate(`/${user.data.Username}`)
      
      
      console.log("fvfssfssssfs tookeeeen ", user.data);
      return
    }catch(err){alert(err)}
    setLogin("")
    setPassword("")
  }
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedTimebyUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      // setUser(user)
      console.log("token from storage", user.data.Token)
      contentService.setToken(user.data.Token)
      dispatch(signIn(user.data.Username))
     
    }
  }, []) 
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