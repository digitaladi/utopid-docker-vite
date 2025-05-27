import express from "express"
//import President from "../models/President.model"
const router =  express.Router()
import PresidentController from "./../controllers/President.controller.js";



/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les présidents
router.get("/admin/presidents", PresidentController.getPresidentsOfAdmin);

//récuperer un user spécifique
router.get("/admin/presidents/:id", PresidentController.getOnePresidentOfAdmin);

router.post("/admin/presidents/add", PresidentController.addPresidentOfAdmin);

router.patch("/admin/presidents/edit/:id", PresidentController.editPresidentOfAdmin);

router.delete("/admin/presidents/delete/:id", PresidentController.deletePresidentOfAdmin);

//router.delete("/admin/users/trash/:id", PresidentController.trashUserOfAdmin);

//router.post("/admin/users/restaure/:id", PresidentController.untrashUserOfAdmin);

export default router;