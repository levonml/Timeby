import axios from "axios";

const baseUrl = '/api/users'
//const baseUrl = "api/users"

const getAllUsers = async () => {
  try{
    const response = await axios.get(baseUrl)
    return response.data
  }catch(err){console.log(err)}
}
const getOne = async (id) => {
  try{
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  }catch(err){console.log(err)}
}
export default {getOne, getAllUsers}