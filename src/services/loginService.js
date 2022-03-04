import axios from "axios";

const login = async (credentials) => {
  console.log('credentials ', credentials)
  const baseUrl = "http://localhost:3001/login"
  //const baseUrl = "https://timeby.herokuapp.com/login"
  try{
    const user = await axios.post(baseUrl, credentials)
    console.log("logged in person is....", user.data.User)
    return user
  }catch(error){alert("wrong password or username")}
}
export default {login}