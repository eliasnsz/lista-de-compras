import axios from "axios";

const appUrl = process.env.APP_URL as string

const api = axios.create({
  baseURL: appUrl + "/api",
})

export default api