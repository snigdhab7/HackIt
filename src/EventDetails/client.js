import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const EVENTS_API = `${BASE_API}/api/events`;
export const USERS_API = `${BASE_API}/api/users`;
export const USEREVENTS_API = `${BASE_API}/api/userevents`;

export const findAllEvents = async () => {
  const response = await axios.get(`${EVENTS_API}`);
  return response.data;
};

export const findEventById = async (eventId) => {
  const response = await axios.get(`${EVENTS_API}/${eventId}`);
  return response.data;
};
  
export const findUserById = async (userId) => {
    const response = await axios.get(`${USEREVENTS_API}/${userId}`);
    return response.data;
};

export const fetchAllEvents = async (eventId) => {
  const response = await axios.get(`${EVENTS_API}/${eventId}`);
  return response.data;
}

export const isUserRegisteredForEvent = async (userId, eventId) => {
  try {
    const response = await axios.get(`${USEREVENTS_API}/${userId}/${eventId}/isregistered`);
    return response.data.isRegistered;
  } catch (error) {
    console.error("Error checking user registration for event:", error);
    throw error;
  }
};

export const registerUserForEvent = async (userId, eventId) => {
  const response = await axios.post(`${USEREVENTS_API}/${userId}/${eventId}/register`);
  return response.data.isRegistered;
}

export const deRegisterUserForEvent = async (userId, eventId) => {
  const response = await axios.put(`${USEREVENTS_API}/${userId}/${eventId}/deregister`);
  console.log("now user is registered?",response.data.isDeregistered);
  return response.data.isDeregistered
}

export const registrationStatus =  async (userId, eventId) => {
  const response = await axios.get(`${USEREVENTS_API}/${userId}/${eventId}/registerstatus`);
  return response.data;
};

