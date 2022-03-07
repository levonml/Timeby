import axios from "axios";

const baseUrl = '/api/users'
//const baseUrl = "api/users"

const getOne = async (id) => {
  try{
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  }catch(err){console.log(err)}
	
}
export default {getOne}