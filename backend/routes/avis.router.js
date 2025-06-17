import express from "express"
import AvisController from "../controllers/Avis.controller.js"
import authJwtMiddleware from "../middlewares/authJwtMiddleware.js";
const router =  express.Router()

/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les avis
router.get("/admin/avis", authJwtMiddleware.authRequiredAdmin, AvisController.getAvisAdmin);

router.get("/admin/avis/:id", authJwtMiddleware.authRequiredAdmin,AvisController.getOneAvisAdmin);

router.post("/admin/avis/add", authJwtMiddleware.authRequiredAdmin,AvisController.addAvisAdmin);

router.patch("/admin/avis/edit/:id", authJwtMiddleware.authRequiredAdmin,AvisController.editAvisAdmin);

router.delete("/admin/avis/delete/:id", authJwtMiddleware.authRequiredAdmin,AvisController.deleteAvisAdmin);



export default router;