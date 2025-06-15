import Axios from "@/baseUrl";

const authService = {
  //se connecter
  login: (data) => {
    return Axios.post("/profile/login", data);
  },

  //créer un token dans le navigateur avec le token généré
  saveToken: (token) => {
    localStorage.setItem("access_token", token);
  },

  //se deconnecter en supprimant le token
  logout: () => {
    localStorage.removeItem("access_token");
  },

  //tester si l'utilisateur est coonecté ou tester s'il y'a un token access_token
  isLogged: () => {
    let token = localStorage.getItem("access_token");
    //faire un test sur token
    return !!token;
  },

  //récupurer le token
  getToken: () => {
    return localStorage.getItem("access_token");
  },

  //récuperer le user
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default authService;
