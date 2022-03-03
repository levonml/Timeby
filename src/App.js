import React from 'react'
import {  Routes , Route} from "react-router-dom"
import YearPage from  './components/YearPage'
import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import SignupButton from './components/SignupButton'
import Header from './components/Header'

const App = () => {
  const time = []
  for(let i = 1920; i <= 2022; i++){
    time.push(i)
  }
  return(
    <div>
      <Routes suppressNoMatchWarning={true}>
        <Route path = "/*" element = { 
          <>
            <LoginButton />
            <SignupButton />
          </>
        }>
        </Route>
      </Routes>
      <Header time = {time}/>
      <YearPage time = {time}/>
      <Routes>
        <Route path = "login" element = {<LoginForm/>}></Route>
        <Route path = "signup" element = {<SignupForm/>}></Route>

      </Routes>
    </div>
   
  )
}

export default App