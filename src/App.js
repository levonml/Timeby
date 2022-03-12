import React from 'react'
import {  Routes , Route, BrowserRouter} from "react-router-dom"
import { useSelector } from 'react-redux';
//import { currentUser } from './halper/halper';

import CurrentUserTimeline from  './components/CurrentUserTimeline'
import CurrentUserHomePage from './components/CurrentUserHomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import CurrentUserYearPage from './components/CurrentUserYearPage';
import AllUsers from './components/AllUsers';
import Navbar from './components/Navbar';
import NavbarLogged from './components/NavbarLogged';
//import { currentUser } from './halper/halper';

const App = () => {
  /*  let loggedUser = null
  const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    loggedUser =  JSON.parse(loggedUserJSON).data.Username
  } */
  const loggedUser = useSelector(state => state.currentUser.userName)//currentUser()
  const currentYear = useSelector(state => state.currentYear)
  console.log("currentYear ", currentYear)
  console.log("currentuser ", loggedUser)
  console.log("path is", `${loggedUser}/timeline/${currentYear}`)
  
  return(
    <BrowserRouter>
      <nav>
        {loggedUser ? <NavbarLogged/> :<Navbar /> }
        <Header />
        <AllUsers />
      </nav>
      <Routes>
        <Route exact path = "login" element = {<LoginForm/>} />
        <Route exact path = "signup" element = {<SignupForm/>} />
        <Route exact path = {`/:userName/home`} element ={<CurrentUserHomePage/>} />
        <Route path = {`/:userName/timeline/:year`} element ={loggedUser ? <CurrentUserYearPage/> : <>loading...</>} />
        <Route path = {`/:userName/timeline/*`} element ={loggedUser ? <CurrentUserTimeline/> : <></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App