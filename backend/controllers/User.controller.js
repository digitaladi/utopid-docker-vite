//import jwt from "jsonwebtoken";

import User from "./../models/User.model.js";
//import createError from "../middlewares/error.js";
import GestionJsonToken from "../services/GestionJsonToken.js";
import fs from "fs";
//import path, { dirname } from "path";
//fonction pour s'inscrire
const UserController = {
  signup: async (req, res) => {
    //console.log(req.body.avatar)
    req.body = { ...req.body, avatar: req.file ? req.file.filename : null };
    // console.log(req.body);
    const { username, email, password, rgpd } = req.body;

    //console.log(req.body)
    // console.log(avatar)
    if ((!username, !email, !password, !rgpd)) {
      return res
        .status(400)
        .json({ message: "Veuillez renseigner les données manquantes" });
    }

    ////vérification si l'utilisateur qui a le mail rentré existe
    User.findOne({ where: { email: email }, raw: true }).then((user) => {
      
      if (user !== null) {
        return res
          .status(409)
          .json({ message: `L'utilisateur ${username} existe déja` });
      }

      //création de l'utilisateur
      User.create(req.body)
        .then((user) => {
          return res.json({ message: `Vous êtes inscris ! `, data: user });
        })

        .catch((err) => {
          res.status(500).json({ message: "Database error", error: err });
        });
    });


    /*
    let user = await User.findOne({
      where: { email: req.body.email },
    });
    //tester si cet utilisareur existe
    if (user) {
      return res.status(400).json({ message: "Cet utilisateur existe déja" });
    }

    // console.log(req.body)

    User.create(req.body)
      .then((user) => {
        console.log(user.username);

        //onc crée le token
        const token = GestionJsonToken.createToken({ email: User.email }, true);

        res.cookie("refresh_token", token.refresh_token);

        res.json({ data: user });
      })
      .catch((error) => {
        const message = "Je n'ai pas pu s'inscrire";
        res.status(500).json({ message: message, data: error });
        // next(createError(500, "erreur lors de l'inscription", error.message));
      });
*/
    // res.json({ data: req.body });

    // res.json({message: "Utilisateur  ajouté !"})

    //try {
    //hashage de mot de passe
    // const hashedpassword = await bcrypt.hash(req.body.password, 10)

    //créer utilisateur
    /*await User.create({
    ...req.body,
    password : hashedpassword
  })
  


  res.json({message: "Utilisateur  ajouté !"})

  } catch (error) {
    // continue regardless of error
    next(createError(500, "erreur lors de l'inscription", error.message))
  }

*/
  },

  EditUser: async (req, res) => {},

  DeletetUser: async (req, res) => {},

  getOneUser: async (req, res) => {
    //let userId = parseInt(req.params.id);
  },

  //coté admin

  addUserOfAdmin: async (req, res) => {
    //console.log(req.body.avatar)
    req.body = { ...req.body, avatar: req.file ? req.file.filename : null };
    // console.log(req.body);
    const { username, email, password, rgpd } = req.body;

    //console.log(req.body)
    // console.log(avatar)
    if ((!username, !email, !password, !rgpd)) {
      return res
        .status(400)
        .json({ message: "Veuillez renseigner les données manquantes" });
    }

    ////vérification si l'utilisateur qui a le mail rentré existe
    User.findOne({ where: { email: email }, raw: true }).then((user) => {
      
      if (user !== null) {
        return res
          .status(409)
          .json({ message: `L'utilisateur ${username} existe déja` });
      }

      //création de l'utilisateur
      User.create(req.body)
        .then((user) => {
          return res.json({ message: `Utilisateur crée`, data: user });
        })

        .catch((err) => {
          res.status(500).json({ message: "Database error", error: err });
        });
    });
  },

  getUsersOfAdmin: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Page actuelle (défaut: 1)
      const limit = parseInt(req.query.limit) || 5; // Nombre d'éléments par page (défaut: 10)
      const offset = (page - 1) * limit;

      //requete qui récupère tous les utilisateurs par n limit en commencant par n offset par ordre croissant
      const { count, rows } = await User.findAndCountAll({
        limit,
        offset,
        order: [["id", "ASC"]],
      });

      res.json({
        users: rows, //la listes des utilisateurs
        totalItems: count, // nombre d'utilisateurs
        totalPages: Math.ceil(count / limit), //nombres totales des utilisateurs / le nombre de pages par page : nombres de pages
        currentPage: page, //la page courante
      });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }

  },

  editUserOfAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let userId = parseInt(req.params.id);

    //on réfinit avatar le nom du fichier choisi ou on le met null
    req.body = { ...req.body, avatar: req.file ? req.file.filename : null };

    if (!userId) {
      return res.status(400).json({ message: "Parametre manqaunt" });
    }

    User.findOne({ where: { id: userId }, raw: true })
      .then((user) => {
        if (user === null) {
          return res
            .status(404)
            .json({ message: "Cet utilisateur n'existe pas !" });
        }

        /*
        if (req.body.avatar && typeof req.body.avatar !== "string") {
          req.body.avatar = req.body.avatar.name; // or convert to string if possible
        }
*/
        //mise à jour de l'utilisateur
        User.update(req.body, { where: { id: userId } })
          .then((user) =>
            res.json({
              data: user,
              message: `L'utilisateur  a été mise à jour ! `,
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

  //récuprer un utilisateur spécifique
  getOneUserOfAdmin: async (req, res) => {
    let userId = parseInt(req.params.id);

    if (!userId) {
      return res.json(400).json({ message: "Ce parametre n'existe pas" });
    }

    User.findOne({ where: { id: userId }, raw: true })
      .then((user) => {
        if (user === null) {
          return res
            .status(404)
            .json({ message: "Cet utilisateur n'existe pas ! " });
        }

        return res.json({ data: user });
      })

      .catch((err) => {
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err });
      });
  },

  //suppression totale ou définitive
  //la seule chose qui change c'est :  , force: true
  deleteUserOfAdmin: async (req, res) => {
    //on récupère l'id dans les parametres
    let userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }

    //pour récupérer l'image uploader et le supprimer
    let user = await User.findOne({ where: { id: userId }, raw: true });
    let pathfile = "./public/uploads/avatars/" + user.avatar;

    User.destroy({ where: { id: userId }, force: true })
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

        res.status(200).json({ message: "Utilisateur supprimé" });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );
  },

  //mettre l'utilisateur à la poubelle sans  le supprimer totalement
  //la seule chose qui change c'est :  , force: true
  trashUserOfAdmin: async (req, res) => {
    //on récuoère l'id dans les parametres
    let userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(400).json({ message: "Parametre manquant" });
    }
    //suppression total
    User.destroy({ where: { id: userId } })
      .then(() =>
        res.status(204).json({ message: "Utilisateur mis à la poubelle" })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );
  },

  //permet de restaurer  l'utilisateur mis à la poubelle
  //dans la pratique on change la date
  untrashUserOfAdmin: async (req, res) => {
    let userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(400).json({ message: "Parametre manqaunt" });
    }

    //restaurer l'utilisateur mis à la poubelle par la fonction trashUserOfAdmin
    User.restore({ where: { id: userId } })

      .then(() => res.status(204).json({ message: "Utilisateur restauré" }))
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Erreur de base de données", error: err })
      );
  },
};

export default UserController;
