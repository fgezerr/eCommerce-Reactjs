import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://projectone.proxolab.com/api/",
});

export default axiosInstance;
