import Country from "../models/Country.model.js";
import Piece from "../models/Piece.model.js";
import User from "../models/User.model.js";
import fs from "fs";

const PieceController = {
  AddPieceOfUser: async (req, res) => {
    console.log(req.body);
    req.body = { ...req.body, photo: req.file ? req.file.filename : null };

    const {
      name,
      size,
      image,
      countryId,
      userId,
      piece_number,
      e_fake_signature,
      procurement_at,
      type_procurement,
    } = req.body;

    //on retorune une erreur si ces variables sont manquantes

    if (
      (!name,
      !image,
      !countryId,
      !userId,
      !size,
      piece_number,
      !e_fake_signature,
      !procurement_at,
      !type_procurement)
    ) {
      return res
        .status(400)
        .json({ message: "Veuillez renseigner les données manquantes" });
    }

    //création de l'utilisateur
    Piece.create(req.body)
      .then((piece) => {
        return res.json({ message: `Piéce crée`, data: piece });
      })

      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err });
      });
  },

  getPiecesOfUser: async (req, res) => {},

  editPieceOfUser: async (req, res) => {},

  deletetPieceOfUser: async (req, res) => {},

  getOnePieceOfUser: async (req, res) => {},

  //coté admin

  addPieceAdmin: async (req, res) => {
    console.log(req.body);
    //génerer le numéro de piece aléatoire
    const caracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let piece_number_generes = "";
    for (let i = 0; i < 20; i++) {
      const indexAleatoire = Math.floor(Math.random() * caracteres.length);
      piece_number_generes += caracteres.charAt(indexAleatoire).toUpperCase();
    }

    req.body = {
      ...req.body,
      image: req.file ? req.file.filename : null,
      piece_number: piece_number_generes,
      user_id: 1,
    };

    const {
      name,
      size,
      image,
      countryId,
      userId,
      e_fake_signature,
      procurement_at,
      type_procurement,
      name_scientist,
    } = req.body;

    //on retorune une erreur si ces variables sont manquantes

    if (
      (!name,
      !image,
      !name_scientist,
      !countryId,
      !userId,
      !size,
      !e_fake_signature,
      !procurement_at,
      !type_procurement)
    ) {
      return res
        .status(400)
        .json({ message: "Veuillez renseigner les données manquantes" });
    }

    //création de l'utilisateur
    Piece.create(req.body)
      .then((piece) => {
        return res.json({ message: `Piéce crée`, data: piece });
      })

      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err });
      });
  },

  getPiecesAdmin: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Page actuelle (défaut: 1)
      const limit = parseInt(req.query.limit) || 5; // Nombre d'éléments par page (défaut: 10)
      const offset = (page - 1) * limit;

      //requete qui récupère tous les pieces par n limit en commencant par n offset par ordre croissant

      const { count, rows } = await Piece.findAndCountAll({
        include: [
          { model: Country, as: "country" },
          { model: User, as: "user" },
        ],

        limit,
        offset,
        order: [["id", "ASC"]],
      });

      res.json({
        pieces: rows, //la listes des pays
        totalItems: count, // nombre pieces
        totalPages: Math.ceil(count / limit), //nombres totales des pieces / le nombre de pages par page : nombres de pages
        currentPage: page, //la page courante
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  editPieceAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let pieceId = parseInt(req.params.id);

    //on réfinit avatar le nom du fichier choisi ou on le met null
    req.body = { ...req.body, image: req.file ? req.file.filename : null };

    console.log(req.body);
    //vérifier si la paremetre id existe
    if (!pieceId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    //vérifier si ce président existe
    Piece.findOne({ where: { id: pieceId }, raw: true })
      .then((piece) => {
        if (piece === null) {
          return res.status(404).json({ message: "Cet pièce n'existe pas !" });
        }

        /*
        if (req.body.avatar && typeof req.body.avatar !== "string") {
          req.body.avatar = req.body.avatar.name; // or convert to string if possible
        }
*/
        //mise à jour de la piece

        console.log(piece);
        Piece.update(req.body, { where: { id: pieceId } })
          .then((piece) =>
            res.json({
              data: piece,
              message: `La piéce a été mise à jour ! `,
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

  deletetPieceAdmin: async (req, res) => {

    //on récupère l'id dans les parametres
    let pieceId = parseInt(req.params.id);

    if (!pieceId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    //pour récupérer l'image uploader et le supprimer
    let piece = await Piece.findOne({
      where: { id: pieceId },
      raw: true,
    });
    let pathfile = "./public/uploads/pieces/"+piece.image;

    Piece.destroy({ where: { id: pieceId }, force: true })
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

        res.status(200).json({ message: "piece supprimé" });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );


  },

  getOnePieceAdmin: async (req, res) => {
    let pieceId = parseInt(req.params.id);

    if (!pieceId) {
      return res.json(400).json({ message: "Ce parametre n'existe pas" });
    }

    Piece.findOne({
      where: {
        // your conditions here, for example:
        id: pieceId,
        //raw: true,
      },

      include: [
        { model: Country, as: "country" },
        { model: User, as: "user" },
      ],
    })

      .then((piece) => {
        if (piece === null) {
          return res.status(404).json({ message: "Cet piéce n'existe pas ! " });
        }

        return res.json({ data: piece });
      })

      .catch((err) => {
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err });
      });
  },
};

export default PieceController;
