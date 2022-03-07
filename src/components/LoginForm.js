import React from "react"
//import loginService from "../services/loginService"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link} from "react-router-dom"
import {logIn} from '../redux/reducers/userReducer'
import { useNavigate } from "react-router-dom"
//import contentService from '../services/contentService'

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
    }else{
      setLogin("")
      setPassword("")
      dispatch(logIn({login, password}))
    }
    navigate(`/${currentUser}`)
    /* try{
      const user =  await loginService.login({login, password})
      console.log("user iddd", user)
      if (user){localStorage.setItem(
        'loggedTimebyUser', JSON.stringify(user)
      )
      dispatch(signIn(user.data.Username))
      contentService.setToken(user.data.Token)
      navigate(`/${user.data.Username}`)
      }
    }catch(err){alert('wrong password or username')}*/
  } 
  /* useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedTimebyUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      // setUser(user)
      console.log("token from storage", user.data.Token)
      contentService.setToken(user.data.Token)
      dispatch(signIn(user.data.Username))
     
    }
  }, [])  */
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