import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
export const signin = async (credentials) => {
    console.log("client",credentials)
  const response = await axios.put( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const createUser = async (user) => {
    const newUser = { ...user,
        _id: new Date().getTime().toString() };
    const response = await axios.post(`${USERS_API}`, newUser);
    return response.data;
  };
  
  export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}`);
    console.log("RESPP",response.data)
    return response.data;
  };

  export const signup = async (credentials) => {
    // const newUser = { ...credentials,
    //     _id: new Date().getTime().toString() };
    const response = await axios.post(
      `${USERS_API}/signup`, credentials);
    return response.data;
   
  };
