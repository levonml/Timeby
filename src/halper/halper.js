//export const currentUser = useSelector(state => state.currentUser.userName)
export const currentUser = () => {
  let user = null;
  const loggedUserJSON = localStorage.getItem("loggedTimebyUser");
  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON).data.Username;
  }
  return user;
};
export const currentYear = () => {
  let year = null;
  const currentYearJSON = localStorage.getItem("currentYear");
  if (currentYearJSON) {
    year = JSON.parse(currentYearJSON);
  }
  return year;
};
