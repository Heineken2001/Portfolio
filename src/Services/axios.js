import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://rwr16kalxf.execute-api.ap-southeast-1.amazonaws.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
});
