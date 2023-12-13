import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";

const request = axios.create({
  withCredentials: true,
});
export const fetchExternalEvents = async () => {
    const response = await request.get(`http://localhost:4000/api/getEvents`);
    return response.data;
};