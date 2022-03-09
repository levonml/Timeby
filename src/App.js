import React from 'react'
import {  Routes , Route} from "react-router-dom"
import { useSelector } from 'react-redux';
import { currentUser } from './halper/halper';

import CurrentUserTimeline from  './components/CurrentUserTimeline'
//import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
//import SignupButton from './components/SignupButton'
import Header from './components/Header'
import CurrentUserPage from './components/CurrentUserPage';
import AllUsers from './components/AllUsers';
import Navbar from './components/Navbar';
//import UserImage from './components/UserImage';

const App = () => {
  //const currentUser = useSelector(state => state.currentUser.userName)
  const loggedUser = currentUser()
  const currentYear = useSelector(state => state.currentYear)
  console.log("currentYear ", currentYear)
  console.log("currentuser ", loggedUser)
  console.log("path is", `${loggedUser}/timeline/${currentYear}`)
  
  return(
    <div>
      <Routes suppressNoMatchWarning={true}>
        <Route path = "/*" element = { 
          <>
            <Navbar />
            <Header />
            <AllUsers />
          </>
        }>
        </Route>
      </Routes>
      <Routes>
        <Route path = "login" element = {<LoginForm/>}></Route>
        <Route path = "signup" element = {<SignupForm/>}></Route>
        <Route path = {`${loggedUser}/timeline`} element ={loggedUser ? <CurrentUserTimeline/> : <></>}></Route>
        <Route path = {`${loggedUser}/timeline/${currentYear}`} element ={loggedUser ? <CurrentUserPage/> : <>loading...</>}></Route>
      </Routes>
    </div>
   
  )
}

export default App