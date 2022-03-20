import axios from "axios";

const baseUrl = "/api/signup";
const signup = async (credentials) => {
  try {
    const user = await axios.post(baseUrl, credentials);
    return user;
  } catch (error) {
    alert("userName is already takeny");
  }
};
export default { signup };
