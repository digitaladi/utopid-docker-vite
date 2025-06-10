import Axios from "@/baseUrl";

const userService = {
  //utilisateurs profile

  register: (data) => {
    return Axios.post("/profile/register", data);
  },

  //les utilisateurs admin
  getUsersAdmin: (page, limit) => {
    return Axios.get(`/admin/users?page=${page}&limit=${limit}`);
  },

  addUserAdmin: (data) => {
    return Axios.post("/admin/users/add", data);
  },

  editUserAdmin: (data, id) => {
    if (!data || !id) {
      throw new Error("L'utilisateur ou l'id de l'utilisateur est manquant ");
    }
    return Axios.patch("/admin/users/edit/" + id, data);
  },

  getOneUserOfAdmin: (id) => {
    return Axios.get("/admin/users/" + id);
  },

  deleteUserAdmin: (id) => {
    return Axios.delete("/admin/users/delete/" + id);
  },
};

export default userService;
