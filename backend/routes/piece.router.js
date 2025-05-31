import express from "express";
import PieceController from "../controllers/Piece.controller.js";
const router = express.Router();

import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/pieces"); // Uploads will be saved in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    // Rename file to avoid conflicts
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les pieces
router.get("/admin/pieces", PieceController.getPiecesAdmin
);

//récuperer un user spécifique
router.get("/admin/pieces/:id", PieceController.getOnePieceAdmin);

router.post("/admin/pieces/add", upload.single("image"),  PieceController.addPieceAdmin);
   
router.patch("/admin/pieces/edit/:id", upload.single("image"),PieceController.editPieceAdmin);

router.delete("/admin/pieces/delete/:id", PieceController.deletetPieceAdmin);

export default router;
