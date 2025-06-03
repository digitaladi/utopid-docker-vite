import President from "../models/President.model.js";
import fs from "fs";
const PresidentController = {
  //coté admin

  addPresidentOfAdmin: async (req, res) => {
    //on récrée req.body dans lequel image est égale nom du fichier
    req.body = { ...req.body, image: req.file ? req.file.filename : null };

    const { name, pseudo, image } = req.body;

    //on retorune une erreur si ces variables sont manquantes
    if ((!name, !pseudo, !image)) {
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

  getPresidentsOfAdmin: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Page actuelle (défaut: 1)
      const limit = parseInt(req.query.limit) || 5; // Nombre d'éléments par page (défaut: 10)
      const offset = (page - 1) * limit;

      //requete qui récupère tous les utilisateurs par n limit en commencant par n offset par ordre croissant
      const { count, rows } = await President.findAndCountAll({
        limit,
        offset,
        order: [["id", "ASC"]],
      });

      res.json({
        presidents: rows, //la listes des utilisateurs
        totalItems: count, // nombre d'utilisateurs
        totalPages: Math.ceil(count / limit), //nombres totales des utilisateurs / le nombre de pages par page : nombres de pages
        currentPage: page, //la page courante
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  editPresidentOfAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let presidentId = parseInt(req.params.id);

    //on réfinit avatar le nom du fichier choisi ou on le met null
    req.body = { ...req.body, image: req.file ? req.file.filename : null };

    //vérifier si la paremetre id existe
    if (!presidentId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    //vérifier si ce président existe
    President.findOne({ where: { id: presidentId }, raw: true })
      .then((president) => {
        if (president === null) {
          return res
            .status(404)
            .json({ message: "Ce president n'existe pas !" });
        }

/*
        if (req.body.avatar && typeof req.body.avatar !== "string") {
          req.body.avatar = req.body.avatar.name; // or convert to string if possible
        }
*/
        //mise à jour de l'utilisateur
        President.update(req.body, { where: { id: presidentId } })
          .then((president) =>
            res.json({
              data: president,
              message: `Le président  a été mise à jour ! `,
            })
          )
          .catch((err) =>
            res
              .status(500)
              .json({ message: "Erreur de base de données", error: err })
          );
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );
  },

  deletePresidentOfAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let presidentId = parseInt(req.params.id);

    if (!presidentId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    //pour récupérer l'image uploader et le supprimer
    let president = await President.findOne({
      where: { id: presidentId },
      raw: true,
    });
    let pathfile = "./public/uploads/presidents/" + president.image;

    President.destroy({ where: { id: presidentId }, force: true })
      .then(() => {
        //si le chemin existe on supprime le fichier lié à cet utilisateur
        try {
          if (fs.existsSync(pathfile)) {
            fs.unlinkSync(pathfile);
            console.log("Fichier supprimé");
          } else {
            console.log("Le fichier n'existe pas, suppression ignorée");
          }
        } catch (err) {
          console.error("Erreur lors de la suppression:", err);
        }

        res.status(200).json({ message: "président supprimé" });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );
  },

  getOnePresidentAdmin: async (req, res) => {
    let presidentId = parseInt(req.params.id);

    if (!presidentId) {
      return res.json(400).json({ message: "Ce parametre n'existe pas" });
    }

    President.findOne({ where: { id: presidentId }, raw: true })
      .then((president) => {
        if (president === null) {
          return res
            .status(404)
            .json({ message: "Ce président n'existe pas ! " });
        }

        return res.json({ data: president });
      })

      .catch((err) => {
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err });
      });
  },
};

export default PresidentController;
