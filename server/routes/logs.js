import express from "express";
import {
  createLog,
  deleteLog,
  getLog,
  getLogs,
  updateLog,
} from "../controllers/getLogs.js";
import Log from "../models/Log.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE
router.post("/", createLog);

// UPDATE
router.put("/:id", updateLog);

// DELETE

router.delete("/:id", deleteLog);

// GET

router.get("/find/:id", getLog);

// GET ALL

router.get("/", getLogs);

export default router;
