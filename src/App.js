import React from 'react'
import {  Routes , Route} from "react-router-dom"
import { useSelector } from 'react-redux';

import YearPage from  './components/YearPage'
import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'
import SignupButton from './components/SignupButton'
import Header from './components/Header'
import CurrentUserPage from './components/CurrentUserPage';
//import { signIn } from './redux/actions';

const App = () => {
  const time = []
  for(let i = 1920; i <= 2022; i++){
    time.push(i)
  }
  //const dispatch = useDispatch()
  /* let currentUser = null
  const loggedUserJSON = localStorage.getItem('loggedTimebyUser')
  console.log("ccccccc", typeof loggedUserJSON)
  if (loggedUserJSON) {
    currentUser = JSON.parse(loggedUserJSON).data.Username
    console.log("llllllllllldddddddd", currentUser)

    dispatch(signIn(currentUser))
  } */
  //dispatch(signIn(currentUser))
  const currentUser = useSelector(state => state.currentUser.userName)
  console.log("logged user is ", currentUser)
  return(
    <div>
      <Routes suppressNoMatchWarning={true}>
        <Route path = "/*" element = { 
          <>
            <Header />
            <LoginButton />
            <SignupButton />
          </>
        }>
        </Route>
      </Routes>
      
      <YearPage time = {time}/>
      <Routes>
        <Route path = "login" element = {<LoginForm/>}></Route>
        <Route path = "signup" element = {<SignupForm/>}></Route>
        <Route path = {`${currentUser}`} element ={currentUser ? <CurrentUserPage/> : <></>}></Route>
      </Routes>
    </div>
   
  )
}

export default App