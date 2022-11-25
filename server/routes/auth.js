import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// REGISTER FEATURE COULD BE ADDED
// router.post("/register", register);
router.post("/login", login);

export default router;
