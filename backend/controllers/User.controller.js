//import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "./../models/User.model.js";
import createError from "../middlewares/error.js";

//fonction pour s'inscrire
const UserController = {

  signup : async (req, res, next) => {
 
  try {
    //hashage de mot de passe 
    const hashedpassword = await bcrypt.hash(req.body.password, 10)

  //créer utilisateur 
 await User.create({
    ...req.body,
    password : hashedpassword
  })
  


  res.status(201).json({message: "Utilisateur  ajouté !"})

  } catch (error) {
    // continue regardless of error
    next(createError(500, "erreur lors de l'inscription", error.message))
  }
}

}
export default UserController