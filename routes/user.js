import express from "express"
import userController from "../controllers/userController.js"

const router = express.Router()

router.post("/packages", userController.getpackages)


export default router