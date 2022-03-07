import axios from "axios";

const baseUrl = '/api/notes'
//const baseUrl = "api/notes"

const getAll = async () => {
  try{
    const response = await axios.get(baseUrl)
    return response.data
  }catch(err){console.log(err)}
  
}
const addText = async (text) => {
  let newToken = null
  const loggedUserJSON = localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    newToken = JSON.parse(loggedUserJSON).data.Token
  }
  newToken = `bearer ${newToken}`
  const config = {
    headers: { Authorization: newToken },
  }
  try{
    const newContent = await axios.post(baseUrl, text, config)
    return newContent.data.text
  }catch(error){alert("problem accured while adding text")}
}
const deleteOneTextSection = async (id)=>{
  try{
    const response = await axios.delete(`baseUrl/${id}`)
    return(response)
  }catch(err){alert(err)}
}
export default {addText,  getAll, deleteOneTextSection}