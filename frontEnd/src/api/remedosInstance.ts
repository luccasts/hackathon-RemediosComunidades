import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/api/remedios",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
