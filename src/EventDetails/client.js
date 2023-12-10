import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const EVENTS_API = `${BASE_API}/api/events`;

export const findAllEvents = async () => {
  const response = await axios.get(`${EVENTS_API}`);
  return response.data;
};
