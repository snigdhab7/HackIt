import axios from "axios";
const request = axios.create({
  withCredentials: true,
});
export const fetchExternalEvents = async () => {
    const response = await request.get(`http://localhost:4000/api/getEvents`);
    return response.data;
};