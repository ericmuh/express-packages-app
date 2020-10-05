import express from "express"
import adminController from "../controllers/adminController.js"

const router = express.Router()

router.post("/users", adminController.createuser)
router.get("/users", adminController.getusers)

export default router