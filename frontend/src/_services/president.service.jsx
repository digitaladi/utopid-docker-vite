import Axios from "@/baseUrl";

const presidentService = {
  //utilisateurs profile

  //les utilisateurs admin
  getPresidentsAdmin: (page, limit) => {
  
return Axios.get(`/admin/presidents?page=${page}&limit=${limit}`);
  },

  addPresidentAdmin: (data) => {
    return Axios.post("/admin/presidents/add", data);
  },

  editPresidentAdmin: (data,id) => {
    if (!data || !id) {
      throw new Error("L'utilisateur ou l'id du président est manquant ");
    }
    return Axios.patch("/admin/presidents/edit/"+id, data);
  },

  getOnePresidentAdmin: (id) => {
    return Axios.get("/admin/presidents/"+id);
  },

  deletePresidentAdmin: (id) =>{
    return Axios.delete("/admin/presidents/delete/"+id)
  }
};

export default presidentService;
