import axios from "axios";

const login = async (credentials) => {
  console.log('credentials ', credentials)
  const baseUrl = "http://localhost:3001/api/login"
  const user = await axios.post(baseUrl, credentials)
  return user
}
export default {login}