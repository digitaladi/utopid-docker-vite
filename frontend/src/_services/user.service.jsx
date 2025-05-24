import Axios from "../baseUrl";

const userService = {
  //utilisateurs profile

  //utilisateurs admin

  getUsersAdmin: () => {
    return Axios.get("/admin/users");
  },

  addUserAdmin: (data) => {
    return Axios.post("/admin/users/add", data);
  },

  editUserAdmin: (data,id) => {
    if (!data || !id) {
      throw new Error("L'utilisateur ou l'id de l'utilisateur est manquant ");
    }
    return Axios.patch("/admin/users/edit/"+id, data);
  },

  getOneUserOfAdmin: (id) => {
    return Axios.get("/admin/users/"+id);
  },
};

export default userService;
