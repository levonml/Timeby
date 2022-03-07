import axios from "axios";

const login = async (credentials) => {
  console.log('credentials ', credentials)
  //"proxy":"http://localhost:3001",
  const baseUrl = "/api/login"
  //const baseUrl = "https://timeby.herokuapp.com/login"
  // try{
  const user = await axios.post(baseUrl, credentials)
  console.log("logged in person is....", user.data.User)
  return user
  // }catch(error){alert(`wrong password or username`)}
}
export default {login}