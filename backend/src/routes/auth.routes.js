import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
console.log("auth.routes.js loaded");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyToken, getMe);
router.post("/logout", logoutUser);

export default router;