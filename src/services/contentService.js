import axios from "axios";


const baseUrl = 'http://localhost:3001/note'


const getAll = async () => {
  try{
    const response = await axios.get(baseUrl)
    console.log('-------------', response.data)
    //  dispatch(setText(response.data))

    return response.data
  }catch(err){console.log(err)}
  
}
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const addText = async (text) => {
  const config = {
    headers: { Authorization: token },
  }
  try{
    const newContent = await axios.post(baseUrl, text, config)
    console.log("added content isss....", newContent.data.text)
    return newContent.data.text
  }catch(error){alert("problem accured while adding text")}
}
export default {addText, setToken, getAll}