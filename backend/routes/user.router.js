import express from "express";
const router = express.Router();
import UserController from "./../controllers/User.controller.js";

//console.log(controller)
//route d'inscription
//la route /register/ méne vers la fonction d'incriptuion UserController.signup
router.post("/register", UserController.signup);








/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les utilisateurs
router.get("/admin/users", UserController.getUsersOfAdmin);

//récuperer un user spécifique
router.get("/admin/users/:id", UserController.getUsersOfAdmin);

router.post("/admin/users/add", UserController.addUserOfAdmin);

router.patch("/admin/users/edit/:id", UserController.editUserOfAdmin);

router.delete("/admin/users/delete/:id", UserController.deleteUserOfAdmin);

router.delete("/admin/users/trash/:id", UserController.trashUserOfAdmin);

router.post("/admin/users/restaure/:id", UserController.untrashUserOfAdmin);

export default router;
