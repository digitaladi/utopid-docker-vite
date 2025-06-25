import Axios from "@/baseUrl";

const countryService = {
  //[[[[[[PROFILE]]]]]]]

  getCountries: () => {
    return Axios.get("/profile/countries");
  },

  //les pays admin
  getCountriesAdmin: (page = null, limit = null) => {
    return Axios.get(`/admin/countries?page=${page}&limit=${limit}`);
  },

  addCountryAdmin: (data) => {
    return Axios.post("/admin/countries/add", data);
  },

  editCountryAdmin: (data, id) => {
    if (!data || !id) {
      throw new Error("Le pays ou l'id du pays  est manquant ");
    }
    return Axios.patch("/admin/countries/edit/" + id, data);
  },

  getOneCountryAdmin: (id) => {
    return Axios.get("/admin/countries/" + id);
  },

  deleteCountryAdmin: (id) => {
    return Axios.delete("/admin/countries/delete/" + id);
  },
};

export default countryService;
