import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const EVENTS_API = `${BASE_API}/api/events`;

export const findAllEvents = async () => {
  const response = await axios.get(`${EVENTS_API}`);
  return response.data;
};

export const createEvent = async (event) => {
  const newEvent = { ...event, id: new Date().getTime().toString() };
  const response = await axios.post(`${EVENTS_API}`, newEvent);
  return response.data;
};