import express from "express"
import PieceController from "../controllers/Piece.controller"
const router =  express.Router()

/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les pieces
router.get("/admin/Pieces", PieceController.getPiecesOfAdmin);

//récuperer un user spécifique
router.get("/admin/Pieces/:id", PieceController.getOnePieceOfAdmin);

router.post("/admin/Pieces/add", PieceController.addPieceOfAdmin);

router.patch("/admin/Pieces/edit/:id", PieceController.editPieceOfAdmin);

router.delete("/admin/Pieces/delete/:id", PieceController.deletetPieceOfAdmin);


export default router;