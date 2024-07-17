import express from "express";
const router = express.Router();
import { signup, login, logout } from "../controllers/user";

// Define routes with appropriate handlers
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
