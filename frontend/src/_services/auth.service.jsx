import Axios from "@/baseUrl";

const authService = {
  login: (data) => {
    return Axios.post("/profile/login", data);
  },
};

export default authService;
