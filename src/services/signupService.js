import axios from "axios";

const baseUrl = '/api/signup'
const signup = async (credentials) => {
  console.log('credentials ', credentials)
  try{
    const user = await axios.post(baseUrl, credentials)
    console.log("logged in person is....", user.data)
    return user
  }catch(error){alert(error)}

}
export default {signup}