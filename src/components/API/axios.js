import axios from "axios";

const axiosInstance = axios.create({
  // local firebase functions/api
  // baseURL: "http://127.0.0.1:5001/clone-e5a02/us-central1/api",

  // amazon-clone api deployed on render.com 
  baseURL: "https://amazon-clone-api-wox6.onrender.com",
});

export { axiosInstance };
