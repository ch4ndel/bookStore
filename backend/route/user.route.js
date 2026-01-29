import express from "express";
import {signup,login,getAllUsers, deleteUser} from "../controllers/user.controller.js"

const router = express.Router();


router.post("/signup",signup)
router.post("/login",login)
router.get("/users",getAllUsers)
router.delete("/delete/:id",deleteUser)
export default router;

