import express from "express"
//import President from "../models/President.model"
const router =  express.Router()
import PresidentController from "./../controllers/President.controller.js";
import multer from "multer";
import authJwtMiddleware from "../middlewares/authJwtMiddleware.js";




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/presidents') // Uploads will be saved in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    // Rename file to avoid conflicts
    cb(null, Date.now() + '-' + file.originalname)
  }
});


const upload = multer({ storage: storage });






/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les présidents
router.get("/admin/presidents", authJwtMiddleware.authRequiredAdmin,  PresidentController.getPresidentsOfAdmin);

//récuperer un user spécifique
router.get("/admin/presidents/:id",  authJwtMiddleware.authRequiredAdmin, PresidentController.getOnePresidentAdmin);

router.post("/admin/presidents/add",  authJwtMiddleware.authRequiredAdmin,upload.single('image'), PresidentController.addPresidentOfAdmin);

router.patch("/admin/presidents/edit/:id",  authJwtMiddleware.authRequiredAdmin, upload.single('image'),PresidentController.editPresidentOfAdmin);

router.delete("/admin/presidents/delete/:id",  authJwtMiddleware.authRequiredAdmin, PresidentController.deletePresidentOfAdmin);

//router.delete("/admin/users/trash/:id", PresidentController.trashUserOfAdmin);

//router.post("/admin/users/restaure/:id", PresidentController.untrashUserOfAdmin);

export default router;