import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
const request =  axios.create({
  withCredentials: true,
});

export const signin = async (credentials) => {
  console.log("sign in creds,",credentials)
  const response = await request.post( `${USERS_API}/signin`, credentials );
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
    console.log("Signup",credentials)
    //const newUser = { ...credentials,
        // _id: new Date().getTime().toString() };
    const response = await request.post(
      `${USERS_API}/signup`, credentials);
      
    return response.data;
  };
