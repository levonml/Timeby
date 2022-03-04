import axios from "axios";

//const baseUrl = 'https://timeby.herokuapp.com/signup'
const baseUrl = "http://localhost:3001/signup"
const signup = async (credentials) => {
  console.log('credentials ', credentials)
  try{
    const user = await axios.post(baseUrl, credentials)
    console.log("logged in person is....", user.data)
    return user
  }catch(error){alert(error)}
}
const getOne = async (id) => {
  try{
    const response = await axios.get(`${baseUrl}/${id}`)
    console.log('-------------', response.data)
    //  dispatch(setText(response.data))
  
    return response.data
  }catch(err){console.log(err)}
	
}
export default {signup, getOne}