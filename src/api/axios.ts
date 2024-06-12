import axios from "axios";
import { apiBaseUrl } from "utils";

const api = axios.create({
  baseURL: `${apiBaseUrl}/api/`,
  headers: {
    "Content-type": "application/json",
  },
  maxBodyLength: Infinity,
  withCredentials: true,
});

export default api;
