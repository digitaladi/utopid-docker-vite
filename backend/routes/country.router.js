import express from "express"
import CountryController from "../controllers/Country.controller.js"
const router =  express.Router()

/* [[[[[[[[[ ADMIN ]]]]]]]] */

//récuprer tous les countries
router.get("/admin/countries", CountryController.getCountriesOfAdmin);

router.get("/admin/countries/:id", CountryController.getOneCountryOfAdmin);

router.post("/admin/countries/add", CountryController.addCountryOfAdmin);

router.patch("/admin/countries/edit/:id", CountryController.editCountryOfAdmin);

router.delete("/admin/countries/delete/:id", CountryController.deleteCountryOfAdmin);


export default router;