import axios from "axios";

const BASE_URL = "https://api.developbetterapps.com/";

export const AuthApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

AuthApi.defaults.headers.common["Content-Type"] = "application/json";
