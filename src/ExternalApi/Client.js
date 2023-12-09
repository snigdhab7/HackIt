import axios from "axios";
const request = axios.create({
  withCredentials: true,
});
export const findAllEvents = async () => {
    const response = await request.get(`http://localhost:4000/getEvents`);
    return response.data;
};