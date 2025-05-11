//import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "./../models/User.model.js";
import createError from "../middlewares/error.js";

//fonction pour s'inscrire
const UserController = {
  signup: async (req, res) => {
    let user = await User.findOne({
      where: { email: req.body.email },
    });
    //tester si cet utilisareur existe
    if (user) {
      return res.status(400).json({ message: "Cet utilisateur existe déja" });
    }
    // console.log(req.body)

    User.create(req.body)
    .then(user => {
    //  console.log(user)
      res.json({message: "Utilisateur  ajouté !"})
    })

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
};
export default UserController;
