import express from "express"
import AuthController from "../controllers/Auth.controller"
const router =  express.Router()



router.post("/login", AuthController.login);



export default router;