import axios from "axios";
import authService from "./_services/auth.service";

//url de base pour l'api de utopid
const Axios = axios.create({
  baseURL: "/api",
});

Axios.interceptors.request.use((request) => {
  if (authService.isLogged()) {
    request.headers.Authorization = "Bearer " + authService.getToken();
  }

  return request;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      console.log(error.response.status);
      window.location = "/signin";
    } else {
      return Promise.reject(error);
    }
  }
);

export default Axios;
