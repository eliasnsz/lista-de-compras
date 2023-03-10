import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/api/",
  baseURL: "https://supermarket-list-rouge.vercel.app/api/",
})

export default api