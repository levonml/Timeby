import axios from "axios";

const baseUrl = 'http://localhost:3001/api/users'
//const baseUrl = "api/users"

const getAllUsers = async () => {
  try{
    const response = await axios.get(baseUrl)
    return response.data
  }catch(err){console.log(err)}
}

export default { getAllUsers}