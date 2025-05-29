import express from "express"
import CountryController from "../controllers/Country.controller.js"
const router =  express.Router()



import multer from "multer";




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
router.get("/admin/countries", CountryController.getCountriesAdmin);

router.get("/admin/countries/:id", CountryController.getOneCountryAdmin);

router.post("/admin/countries/add", upload.single('flag'),  CountryController.addCountryAdmin);


router.patch("/admin/countries/edit/:id", upload.single('flag'), CountryController.editCountryAdmin);

router.delete("/admin/countries/delete/:id", CountryController.deleteCountryAdmin);


export default router;