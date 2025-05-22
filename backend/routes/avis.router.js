import express from "express"
import AvisController from "../controllers/Avis.controller"
const router =  express.Router()

/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les avis
router.get("/admin/avis", AvisController.getAvisOfAdmin);

router.get("/admin/avis/:id", AvisController.getOneAvisOfAdmin);

router.post("/admin/avis/add", AvisController.addAvisOfAdmin);

router.patch("/admin/avis/edit/:id", AvisController.editAvisOfAdmin);

router.delete("/admin/avis/delete/:id", AvisController.deleteAvisOfAdmin);



export default router;