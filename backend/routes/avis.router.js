import express from "express"
import AvisController from "../controllers/Avis.controller.js"
const router =  express.Router()

/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les avis
router.get("/admin/avis", AvisController.getAvisAdmin);

router.get("/admin/avis/:id", AvisController.getOneAvisAdmin);

router.post("/admin/avis/add", AvisController.addAvisAdmin);

router.patch("/admin/avis/edit/:id", AvisController.editAvisAdmin);

router.delete("/admin/avis/delete/:id", AvisController.deleteAvisAdmin);



export default router;