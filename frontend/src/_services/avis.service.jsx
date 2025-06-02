import Axios from "@/baseUrl";

const avisService = {
  //utilisateurs profile

  //les pays admin
  getAvisAdmin: (page = null, limit = null) => {
  
return Axios.get(`/admin/avis?page=${page}&limit=${limit}`);
  },

  addAvisAdmin: (data) => {
    return Axios.post("/admin/avis/add", data);
  },



  editAvisAdmin: (data,id) => {
    if (!data || !id) {
      throw new Error("L'avis ou l'id du pays  est manquant ");
    }
    return Axios.patch("/admin/avis/edit/"+id, data);
  },

  getOneAvisAdmin: (id) => {
    return Axios.get("/admin/avis/"+id);
  },

  deleteAvisAdmin: (id) =>{
    return Axios.delete("/admin/avis/delete/"+id)
  }
};

export default avisService;
