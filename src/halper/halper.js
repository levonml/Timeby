//import { useSelector } from "react-redux";
//export const currentUser = useSelector(state => state.currentUser.userName)
export const currentUser =  () => {
  let user = null
  const loggedUserJSON =  window.localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    user =  JSON.parse(loggedUserJSON).data.Username
  }
  return user
}
export const currentYear =  () => {
  let year = null
  const currentYearJSON =  window.localStorage.getItem('currentYear')
  if (currentYearJSON) {
    year =  JSON.parse(currentYearJSON)
  }
  return year
}
