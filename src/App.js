import React from 'react'
import { BrowserRouter as Router, Routes , Route} from "react-router-dom"
import {useSelector} from 'react-redux'
import TimeScroller from './components/TimeScroller'
import YearPage from  './components/YearPage'
import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import SignupButton from './components/SignupButton'

const App = () => {
  const time = []
  for(let i = 1980; i <= 2022; i++){
    time.push(i)
  }

  const currentUser = useSelector(state => state.currentUser.userName)
  console.log('useselector for currentUser', currentUser)
  return(
    <Router>
      <LoginButton />
      <SignupButton />
      <div style = {{"position" : 'absolute'}}>
        <h1>TimeBy {currentUser}</h1>
        <TimeScroller time = {time}/>
      </div>
     
      <YearPage time = {time}/>
      <Routes>
        <Route exact path = "/login" element = {<LoginForm/>}></Route>
        <Route exact path = "/signup" element = {<SignupForm/>}></Route>
      </Routes>
    </Router>
  )
}

export default App