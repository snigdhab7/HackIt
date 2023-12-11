import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const EVENTS_API = `${BASE_API}/api/events`;
export const USERS_API = `${BASE_API}/api/users`;

export const findAllEvents = async () => {
  const response = await axios.get(`${EVENTS_API}`);
  return response.data;
};

export const findEventById = async (eventId) => {
  const response = await axios.get(`${EVENTS_API}/${eventId}`);
  console.log(response);
  return response.data;
};
  
export const findUserById = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}`);
    console.log("RESSSSS",response.data);
    return response.data;
};
