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
    // si l'utilisateur n'est pas connecté
    if (error.response.status === 401) {
      console.log(error.response.status);
      window.location = "/signin";
    }
/*
    // si l'utilisateur pas les droits admin
    else if (error.response.status === 403) {
      window.location = "/dashboard";
    } 
    */
    
    else {
      return Promise.reject(error);
    }
  }
);

export default Axios;
