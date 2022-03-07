import axios from "axios";

const baseUrl = '/api/users'
//const baseUrl = "api/users"

const getOne = async (id) => {
  try{
    console.log("userssss")

    const response = await axios.get(`${baseUrl}/${id}`)
    //  dispatch(setText(response.data))
    // console.log("userssss", response.data)
    return response.data
  }catch(err){console.log(err)}
	
}
export default {getOne}