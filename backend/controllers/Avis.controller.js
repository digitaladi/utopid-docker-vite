import Avis from "../models/Avis.model.js";
import Piece from "../models/Piece.model.js";
import User from "../models/User.model.js";

const AvisController = {
  //coté admin

  addAvisAdmin: async (req, res) => {
    //console.log(req.body);

    req.body = {
      ...req.body,
      pieceId: 2,
      UserId: 1,
    };

    const { comment, rating, pieceId, UserId, reported } = req.body;

    //on retorune une erreur si ces variables sont manquantes
    console.log(rating);
    if ((!comment, !rating, !pieceId, !UserId, !reported)) {
      return res
        .status(400)
        .json({ message: `Veuillez renseigner les données manquantes` });
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

  getAvisAdmin: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Page actuelle (défaut: 1)
      const limit = parseInt(req.query.limit) || 5; // Nombre d'éléments par page (défaut: 10)
      const offset = (page - 1) * limit;

      //requete qui récupère tous les utilisateurs par n limit en commencant par n offset par ordre croissant
      const { count, rows } = await Avis.findAndCountAll({
        include: [
          { model: Piece, as: "piece" },
          { model: User, as: "user" },
        ],

        limit,
        offset,
        order: [["id", "ASC"]],
      });

      res.json({
        avis: rows, //la listes des utilisateurs
        totalItems: count, // nombre d'utilisateurs
        totalPages: Math.ceil(count / limit), //nombres totales des utilisateurs / le nombre de pages par page : nombres de pages
        currentPage: page, //la page courante
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  editAvisAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let avisId = parseInt(req.params.id);

    //on réfinit avatar le nom du fichier choisi ou on le met null
    req.body = { ...req.body, image: req.file ? req.file.filename : null };

    console.log(req.body);
    //vérifier si la paremetre id existe
    if (!avisId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    //vérifier si cet avis existe
    Avis.findOne({ where: { id: avisId }, raw: true })
      .then((avis) => {
        if (avis === null) {
          return res.status(404).json({ message: "Cet avis n'existe pas !" });
        }

        /*
        if (req.body.avatar && typeof req.body.avatar !== "string") {
          req.body.avatar = req.body.avatar.name; // or convert to string if possible
        }
*/
        //mise à jour de la piece

        console.log(avis);
        Avis.update(req.body, { where: { id: avisId } })
          .then((piece) =>
            res.json({
              data: piece,
              message: `L'avis a été mise à jour ! `,
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

  deleteAvisAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let avisId = parseInt(req.params.id);

    if (!avisId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    Avis.destroy({ where: { id: avisId }, force: true })
      .then(() => {
        res.status(200).json({ message: "piece supprimé" });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );
  },


  getOneAvisAdmin: async (req, res) => {
    let avisId = parseInt(req.params.id);

    if (!avisId) {
      return res.json(400).json({ message: "Ce parametre n'existe pas" });
    }

    Avis.findOne({
      where: {
        // your conditions here, for example:
        id: avisId,
        //raw: true,
      },

      include: [
        { model: Piece, as: "piece" },
        { model: User, as: "user" },
      ],
    })

      .then((avis) => {
        if (avis === null) {
          return res.status(404).json({ message: "Cet avis n'existe pas ! " });
        }

        return res.json({ data: avis });
      })

      .catch((err) => {
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err });
      });
  },
};

export default AvisController;
