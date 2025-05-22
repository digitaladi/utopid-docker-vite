import President from "../models/President.model";


const PresidentController = {
  //coté admin





  addPresidentOfAdmin: async (req, res) => {

const {  name, nam_scientist, image, descriptif } = req.body;

    if ((!name, !nam_scientist, !image, !descriptif)) {
      return res
        .status(400)
        .json({ message: "Veuillez renseigner les données manquantes" });
    }


              //création de l'utilisateur
      President.create(req.body)
        .then((president) => {
          return res.json({ message: `Président crée`, data: president });
        })

        .catch((err) => {
          res.status(500).json({ message: "Database error", error: err });
        });

  },


 getPresidentsOfAdmin: async (req, res) => {},


  editPresidentOfAdmin : async (req, res) => {},

  deletePresidentOfAdmin : async (req, res) => {},

  getOnePresidentOfAdmin : async (req, res) => {},
}

export default PresidentController