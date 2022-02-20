import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";

import TimeScroller from './components/TimeScroller'
import YearPage from  './components/YearPage'


const App = () => {
  const time = []
  for(let i = 1980; i <= 2022; i++){
    time.push(i)
  }
  return(
    <Router>

      <div style = {{"position" : 'absolute'}}>
        <h1>TimeBy</h1>
        <TimeScroller time = {time}/>
      </div>
      <YearPage time = {time}/>
    </Router>
  )
}

export default App