import express from "express"
const router =  express.Router()
import AuthController from "./../controllers/Auth.controller.js"




router.post("/profile/login", AuthController.login);



export default router;