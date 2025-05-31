import Axios from "@/baseUrl";

const pieceService = {
  //utilisateurs profile

  //les pays admin
  getPiecesAdmin: (page = null, limit = null) => {
  
return Axios.get(`/admin/pieces?page=${page}&limit=${limit}`);
  },

  addPieceAdmin: (data) => {
    return Axios.post("/admin/pieces/add", data);
  },



  editPieceAdmin: (data,id) => {
    if (!data || !id) {
      throw new Error("Le pays ou l'id du pays  est manquant ");
    }
    return Axios.patch("/admin/pieces/edit/"+id, data);
  },

  getOnePieceAdmin: (id) => {
    return Axios.get("/admin/pieces/"+id);
  },

  deletePieceAdmin: (id) =>{
    return Axios.delete("/admin/pieces/delete/"+id)
  }
};

export default pieceService;
