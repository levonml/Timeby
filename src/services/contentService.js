import axios from "axios";

const baseUrl = 'http://localhost:3001/api/content'

let getToken = () => {
  const loggedUserJSON =  localStorage.getItem('loggedTimebyUser')
  if (loggedUserJSON) {
    const token =  JSON.parse(loggedUserJSON).data.Token
    return `bearer ${token}`
  }
  return null
}


const getAll = async () => {
  try{
    const response = await axios.get(baseUrl)
    return response.data
  }catch(err){console.log(err)}
  
}
const getOne = async (userName) => {
  try{
    const response = await axios.get(`${baseUrl}/${userName}`)
    //console.log("response getOne, after Await", response.data.content)
    localStorage.setItem(
      'currentUserData', JSON.stringify(response.data.content)
    )
    return response.data.content
  }catch(err){console.log(err)}
}
const addText = async (text, currentYear, user) => {
  const token = getToken()
  console.log("token after settting", token)

  const config = {
    headers: { Authorization: token },
  }
  try{
    console.log("token after settting", token)

    const newContent = await axios.put(`${baseUrl}/addtext/${user}/${currentYear}`, text, config)
    console.log('newContent.data.text', newContent.data)
    return newContent.data
  }catch(error){alert(error)}
}
const addYear = async (userName, year) => {
  const token = getToken()
  const config = {
    headers: { Authorization: token },
  }
  console.log("config is", config)
  console.log("tyear is",  year.year)
  try{
    const newYear = await axios.put(`${baseUrl}/addYear/${userName}`, year, config)
    console.log("neaYear from service - ", newYear.data.content.year )
    return newYear.data.content
  }catch(error){alert(error)}
}
const deleteOneYear = async (year)=>{
  try{
    const response = await axios.delete(`${baseUrl}/deleteOneYear/${year}`)
    return(response)
  }catch(err){alert(err)}
}
const deleteOneTextSection = async (yearId, key)=>{
  try{
    const response = await axios.put(`${baseUrl}/removetext/${yearId}/${key}`)
    return(response)
  }catch(err){alert(err)}
}
export default {addText,  getAll, getOne, deleteOneYear, deleteOneTextSection, addYear}