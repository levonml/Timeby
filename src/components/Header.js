import React from "react";
import {useSelector} from 'react-redux'

// eslint-disable-next-line react/prop-types
const Header = () => {
  const currentUser = useSelector(state => state.currentUser.userName)
  return (
    <div>
      <h1>TimeBy {currentUser}</h1>
    </div>
  )
}
export default Header