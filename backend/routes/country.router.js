import express from "express"
import CountryController from "../controllers/Country.controller.js"
const router =  express.Router()



import multer from "multer";
import authJwtMiddleware from "../middlewares/authJwtMiddleware.js";




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/flags') // Uploads will be saved in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    // Rename file to avoid conflicts
    cb(null, Date.now() + '-' + file.originalname)
  }
});


const upload = multer({ storage: storage });



/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les countries
router.get("/admin/countries", authJwtMiddleware.authRequiredAdmin, CountryController.getCountriesAdmin);

router.get("/admin/countries/:id", authJwtMiddleware.authRequiredAdmin,CountryController.getOneCountryAdmin);

router.post("/admin/countries/add", authJwtMiddleware.authRequiredAdmin,upload.single('flag'),  CountryController.addCountryAdmin);


router.patch("/admin/countries/edit/:id", authJwtMiddleware.authRequiredAdmin,upload.single('flag'), CountryController.editCountryAdmin);

router.delete("/admin/countries/delete/:id", authJwtMiddleware.authRequiredAdmin,CountryController.deleteCountryAdmin);


export default router;