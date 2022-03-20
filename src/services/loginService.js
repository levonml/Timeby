import axios from "axios";

const login = async (credentials) => {
  const baseUrl = "/api/login";
  const user = await axios.post(baseUrl, credentials);
  return user;
};
export default { login };
