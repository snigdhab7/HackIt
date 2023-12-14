import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const EVENTS_API = `${BASE_API}/api/events`;
export const USERS_API = `${BASE_API}/api/users`;

export const findAllEvents = async () => {
  const response = await axios.get(`${EVENTS_API}`);
  console.log("response", response);
  return response.data;
};

export const createEvent = async (event) => {
  const newEvent = { ...event, id: new Date().getTime().toString() };
  const response = await axios.post(`${EVENTS_API}`, newEvent);
  return response.data;
};

export const findEventById = async (eventId) => {
  const response = await axios.get(`${EVENTS_API}/${eventId}`);
  return response.data;
};

export const findUserById = async (id) => {
  console.log("XXX",id)
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const signout = async () => {
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};
export const fetchCurrentUserDetails = async (userid) => {

  const response = await axios.post(`${USERS_API}/currentUser`, { userid: userid });
  return response.data;
};

export const findEventsByOrganizerId = async (organizerId) => {
  const response = await axios.get(`${EVENTS_API}/organizer/${organizerId}`);
  return response.data;
};