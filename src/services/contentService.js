import axios from "axios";

const baseUrl = '/api/notes'

const getAll = async () => {
  try{
    const response = await axios.get(baseUrl)
    return response.data
  }catch(err){console.log(err)}
  
}
const addText = async (text, currentYear, user) => {
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
    const newContent = await axios.put(`${baseUrl}/${user}/${currentYear}`, text, config)
    console.log('newContent.data.text', newContent.data.text)
    return newContent.data.text
  }catch(error){alert("problem accured while adding text")}
}
const addYear = async (year) => {
 
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
    const newYear = await axios.post(baseUrl, year, config)
    console.log("neaYear from service - ", newYear.data.year )
    return newYear.data.year
  }catch(error){alert("problem accured while adding text")}
}
const deleteOneTextSection = async (id, key)=>{
  try{
    const response = await axios.put(`${baseUrl}/${id}/${key}`)
    return(response)
  }catch(err){alert(err)}
}
export default {addText,  getAll, deleteOneTextSection, addYear}