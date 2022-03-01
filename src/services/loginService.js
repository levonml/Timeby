import axios from "axios";

const login = async (credentials) => {
  console.log('credentials ', credentials)
  try{
    const user = await axios.post('http://localhost:3001/login', credentials)
    console.log("logged in person is....", user.data.User)
    return user
  }catch(error){alert("wrong password or username")}
}
export default {login}