import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getProfileAnalysis } from "../controllers/aiController.js";

const router = express.Router();

router.get("/profile-analysis", authMiddleware, getProfileAnalysis);

export default router;