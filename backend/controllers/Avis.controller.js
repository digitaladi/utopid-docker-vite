import Avis from "../models/Avis.model.js";

const AvisController = {
  //coté admin

  addAvisAdmin: async (req, res) => {
    console.log(req.body);

    req.body = {
      ...req.body,
      piece_id: 2,
      user_id: 1,
    };

    const { comment, rating, piece_id, user_id } = req.body;

    //on retorune une erreur si ces variables sont manquantes

    if ((!comment, !rating, !piece_id, !user_id)) {
      return res
        .status(400)
        .json({ message: "Veuillez renseigner les données manquantes" });
    }

    //création de l'utilisateur
    Avis.create(req.body)
      .then((avis) => {
        return res.json({ message: `Avis crée`, data: avis });
      })

      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err });
      });
  },

  getAvisAdmin: async (req, res) => {},

  editAvisAdmin: async (req, res) => {},

  deleteAvisAdmin: async (req, res) => {},

  getOneAvisAdmin: async (req, res) => {},
};

export default AvisController;
