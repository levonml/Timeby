import axios from "axios";

const baseUrl = "/api/content";

let getToken = () => {
  const loggedUserJSON = localStorage.getItem("loggedTimebyUser");
  if (loggedUserJSON) {
    const token = JSON.parse(loggedUserJSON).data.Token;
    return `bearer ${token}`;
  }
  return null;
};

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
const getOne = async (userName) => {
  try {
    const response = await axios.get(`${baseUrl}/${userName}`);
    localStorage.setItem(
      "currentUserData",
      JSON.stringify(response.data.content)
    );
    return response.data.content;
  } catch (err) {
    console.log(err);
  }
};
const addText = async (text, currentYear, user) => {
  const token = getToken();
  const config = {
    headers: { Authorization: token },
  };
  try {
    const newContent = await axios.put(
      `${baseUrl}/addtext/${user}/${currentYear}`,
      text,
      config
    );
    return newContent.data;
  } catch (error) {
    alert(error);
  }
};
const addYear = async (userName, year) => {
  const token = getToken();
  const config = {
    headers: { Authorization: token },
  };
  try {
    await axios.put(`${baseUrl}/addYear/${userName}`, year, config);
  } catch (error) {
    alert(error);
  }
};
const deleteOneYear = async (year, user) => {
  try {
    const response = await axios.put(
      `${baseUrl}/deleteOneYear/${user}/${year}`
    );
    return response;
  } catch (err) {
    alert(err);
  }
};
const deleteOneTextSection = async (user, year, index) => {
  try {
    const response = await axios.put(
      `${baseUrl}/removetext/${user}/${year}/${index}`
    );
    return response;
  } catch (err) {
    alert(err);
  }
};
export default {
  addText,
  getAll,
  getOne,
  deleteOneYear,
  deleteOneTextSection,
  addYear,
};
