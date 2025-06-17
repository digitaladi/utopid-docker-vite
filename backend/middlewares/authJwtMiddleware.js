import User from "../models/User.model.js";
import GestionJsonToken from "../services/GestionJsonToken.js";

//
const authJwtMiddleware = {
  authRequired: GestionJsonToken.verifyAccessToken,

    //tester si l'utilisateur est admin
  authRequiredAdmin: GestionJsonToken.verifyAccessTokenAdmin




};


export default authJwtMiddleware
