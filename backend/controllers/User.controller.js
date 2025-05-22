//import jwt from "jsonwebtoken";

import User from "./../models/User.model.js";
//import createError from "../middlewares/error.js";
import GestionJsonToken from "../services/GestionJsonToken.js";

//fonction pour s'inscrire
const UserController = {
  signup: async (req, res) => {
    //données récupéres
    const { email, username } = req.body;

    User.findOne({ where: { email: email }, raw: true }).then((user) => {
      if (user !== null) {
        return res.json({ message: `L' utilisateur ${username} existe` });
      }
    });
    //teste si l'utilisateur avec l'email rentré existe

    //on s'inscris
    User.create(req.body)
      .then((user) => {
        //onc crée le token
        // const token = GestionJsonToken.createToken({ email: User.email }, true);

        //on crée le cookie
        //  res.cookie("refresh_token", token.refresh_token);
        return res.json({ message: `Utilisateur crée`, data: user });
      })
      .catch((err) => {
        console.log("oups");
        return res
          .status(500)
          .json({ message: `Erreur de base de données`, error: err });
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
    req.body = { ...req.body, avatar: req.file.filename };
    console.log(req.body);
    const { username, email, lastname, firstname, password, rgpd, avatar} = req.body;



    //console.log(req.body)
   // console.log(avatar)
    if ((!lastname, !firstname, !username, !email, !password, !rgpd, !avatar)) {
      return res
        .status(400)
        .json({ message: "Veuillez renseigner les données manquantes" });
    }


    User.findOne({ where: { email: email }, raw: true }).then((user) => {
      //vérification si l'utilisateur existe
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
    User.findAll()
      .then((users) => {
        res.json({ data: users });
      })
      .catch((err) => {
        res.status(500).json({ message: "Database error", error: err });
      });
  },

  editUserOfAdmin: async (req, res) => {
    //on récuoère l'id dans les parametres
    let userId = parseInt(req.params.id);

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

        //mise à jour de l'utilisateur
        User.update(req.body, { where: { id: userId } })
          .then((user) =>
            res.json({
              message: `Utilisateur  ${user.username} a été mise à jour ! `,
            })
          )
          .catch((err) =>
            res.status(500).json({ message: "Database error", error: err })
          );
      })
      .catch((err) =>
        res.status(500).json({ message: "Database error", error: err })
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
        res.status(500).json({ message: "Database error", error: err });
      });
  },

  //suppression totale ou définitive
  //la seule chose qui change c'est :  , force: true
  deleteUserOfAdmin: async (req, res) => {
    //on récuoère l'id dans les parametres
    let userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(400).json({ message: "Parametre manqaunt" });
    }
    //suppression total
    User.destroy({ where: { id: userId }, force: true })
      .then(() => res.status(204).json({ message: "Utilisateur supprimé" }))
      .catch((err) =>
        res.status(500).json({ message: "Database error", error: err })
      );
  },

  //mettre l'utilisateur à la poubelle sans  le supprimer totalement
  //la seule chose qui change c'est :  , force: true
  trashUserOfAdmin: async (req, res) => {
    //on récuoère l'id dans les parametres
    let userId = parseInt(req.params.id);

    if (!userId) {
      return res.status(400).json({ message: "Parametre manqaunt" });
    }
    //suppression total
    User.destroy({ where: { id: userId } })
      .then(() =>
        res.status(204).json({ message: "Utilisateur mis à la poubelle" })
      )
      .catch((err) =>
        res.status(500).json({ message: "Database error", error: err })
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

      .then(() => res.status(204).json({ message: "Utilisateur restuaré" }))
      .catch((err) =>
        res.status(500).json({ message: "Database error", error: err })
      );
  },
};

export default UserController;
