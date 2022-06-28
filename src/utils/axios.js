import axios from "axios";
// config

const axiosInstance = axios.create({
  baseURL: "https://projectone.proxolab.com/api/",
});

export default axiosInstance;
