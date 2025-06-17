import express from "express";
const router = express.Router();
import UserController from "./../controllers/User.controller.js";
import multer from "multer";
import authJwtMiddleware from "../middlewares/authJwtMiddleware.js";









// Set up storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/avatars') // Uploads will be saved in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    // Rename file to avoid conflicts
    cb(null, Date.now() + '-' + file.originalname)
  }
});


const upload = multer({ storage: storage });



//route d'inscription
//la route /register/ méne vers la fonction d'inscription UserController.signup
router.post("/profile/register", upload.single('avatar'),UserController.signup);






/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les utilisateurs
router.get("/admin/users",  authJwtMiddleware.authRequiredAdmin, UserController.getUsersOfAdmin);

//récuperer un user spécifique
router.get("/admin/users/:id",  authJwtMiddleware.authRequiredAdmin,UserController.getOneUserOfAdmin);

router.post("/admin/users/add", upload.single('avatar'),  authJwtMiddleware.authRequiredAdmin, UserController.addUserOfAdmin);

router.patch("/admin/users/edit/:id", upload.single('avatar'),  authJwtMiddleware.authRequiredAdmin, UserController.editUserOfAdmin);

router.delete("/admin/users/delete/:id",  authJwtMiddleware.authRequiredAdmin, UserController.deleteUserOfAdmin);

router.delete("/admin/users/trash/:id",  authJwtMiddleware.authRequiredAdmin, UserController.trashUserOfAdmin);

router.post("/admin/users/restaure/:id",  authJwtMiddleware.authRequiredAdmin, UserController.untrashUserOfAdmin);

export default router;
