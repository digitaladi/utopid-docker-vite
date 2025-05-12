//import jwt from "jsonwebtoken";

import User from "./../models/User.model.js";
import createError from "../middlewares/error.js";
import GestionJsonToken from "../services/GestionJsonToken.js";

//fonction pour s'inscrire
const UserController = {
  signup: async (req, res, next) => {

    //récuperer l'utilisateur
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
      console.log(user.username)

      //onc crée le token
     const token = GestionJsonToken.createToken({email:User.email},true)

     res.cookie("refresh_token", token.refresh_token)

      res.json({data:user, access_token:token.access_token})
    }).catch(error => {
      next(createError(500, "erreur lors de l'inscription", error.message))
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
