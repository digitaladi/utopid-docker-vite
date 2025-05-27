import express from "express";
const router = express.Router();
import UserController from "./../controllers/User.controller.js";
import multer from "multer";

//console.log(controller)
//route d'inscription
//la route /register/ méne vers la fonction d'incriptuion UserController.signup
router.post("/register", UserController.signup);






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




/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les utilisateurs
router.get("/admin/users", UserController.getUsersOfAdmin);

//récuperer un user spécifique
router.get("/admin/users/:id", UserController.getOneUserOfAdmin);

router.post("/admin/users/add", upload.single('avatar'), UserController.addUserOfAdmin);

router.patch("/admin/users/edit/:id", upload.single('avatar'), UserController.editUserOfAdmin);

router.delete("/admin/users/delete/:id", UserController.deleteUserOfAdmin);

router.delete("/admin/users/trash/:id", UserController.trashUserOfAdmin);

router.post("/admin/users/restaure/:id", UserController.untrashUserOfAdmin);

export default router;
