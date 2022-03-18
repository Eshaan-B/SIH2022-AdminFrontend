import axios from "axios";

const instance = axios.create({
  baseURL: "192.168.195.84:8000/api",
});

export default instance;
