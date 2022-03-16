import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link} from "react-router-dom"
import {logIn} from '../redux/reducers/signinReducer'
import { useNavigate} from "react-router-dom"
//import { currentUser } from "../halper/halper"
import { initialize } from "../redux/reducers/contentReducer"
import './stylesheets/stylesheet.css'

const LoginForm = () =>{
 
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  //const loggedUser = currentUser()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loggedUser = useSelector(state => state.currentUser.userName)
  const userNameHandler = event => {
    setLogin(event.target.value)
  }
  const passwordHandler = event => {
    setPassword(event.target.value)
  }
 
  // eslint-disable-next-line no-unused-vars
  const loginHandler = async (event) =>{ 
    event.preventDefault()
    if (loggedUser){
      alert("you are already logged on") 
      navigate(`/${loggedUser}`)
    }else{
      setLogin("")
      setPassword("")
      dispatch(logIn({login, password}))
      dispatch(initialize(login))
      if (login){navigate(`/${login}/home`)}
      //location.reload()
    }
  }
  return(
    <div className = 'mainContainerLoginForm'>
      <form  onSubmit = {loginHandler}>
        <div>login<input type="text" value={login} onChange={userNameHandler}></input></div>
        <div>password<input type="password" value={password} onChange = {passwordHandler}></input></div>
        <button type="submit">Login</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  )
}
export default LoginForm