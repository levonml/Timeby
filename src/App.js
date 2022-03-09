import React from 'react'
import {  Routes , Route} from "react-router-dom"
import { useSelector } from 'react-redux';

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
  const time = []
  for(let i = 1920; i <= 2022; i++){
    time.push(i)
  }

  const currentUser = useSelector(state => state.currentUser.userName)
  console.log("logged user is ", currentUser)
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
        <Route path = {currentUser} element= {<CurrentUserTimeline/>}></Route> 
        <Route path = {`${currentUser}/timeline`} element ={currentUser ? <CurrentUserPage/> : <></>}></Route>
      </Routes>
    </div>
   
  )
}

export default App