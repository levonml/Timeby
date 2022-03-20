import axios from "axios";

const baseUrl = "/api/users";

const getAllUsers = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default { getAllUsers };
