import express from "express"
import AuthController from "../controllers/Auth.controller.js"
const router =  express.Router()



router.post("/profile/login", AuthController.login);



export default router;