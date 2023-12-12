import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
const request =  axios.create({
  withCredentials: true,
});

export const findAllUsers = async () => {
    const response = await request.get(`${USERS_API}`);
    console.log("RESPP",response.data)
    return response.data;
  };
 
