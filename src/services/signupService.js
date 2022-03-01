import axios from "axios";

const signup = async (credentials) => {
  console.log('credentials ', credentials)
  try{
    const user = await axios.post('http://localhost:3001/signup', credentials)
    console.log("logged in person is....", user.data)
    return user
  }catch(error){alert(error)}
}
export default {signup}