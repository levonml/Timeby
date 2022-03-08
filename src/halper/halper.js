//import { useSelector } from "react-redux";
//export const currentUser = useSelector(state => state.currentUser.userName)
const currentUser =  () => {
  let user = null
  const loggedUserJSON = window.localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON).data.Username
  }
  return user
}
export default {currentUser}