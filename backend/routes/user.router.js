import express from "express"

const router =  express.Router()
import UserController from "./../controllers/User.controller.js"




//console.log(controller)
//route d'inscription
//la route /register/ méne vers la fonction d'incriptuion UserController.signup
router.post('/register/',   UserController.signup) 



export default router;