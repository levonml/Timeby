import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter  } from "react-router-dom";
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux";

import       App from './App'
import userReducer from "./redux/reducers/userReducer";
import contentReduser from "./redux/reducers/contentReducer"

const reducer = combineReducers({
  currentUser: userReducer,
  currentText: contentReduser
})
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)