import User from "../models/User.model.js";
import GestionJsonToken from "../services/GestionJsonToken.js";

//
const authJwtMiddleware = {
  authRequired: GestionJsonToken.verifyAccessToken,


  //tester si l'utilisateur est admin
  isAdmin: (req, res, next) => {
    User.findByPk(req.id).then((user) => {
        console.log("user")
      if (user === "ROLE_ADMIN") {
        next();
        return;
      }

     return res.status(403).send({ message: "Vous n'avez pas le rôle admin" });
    });
  },
};


export default authJwtMiddleware
