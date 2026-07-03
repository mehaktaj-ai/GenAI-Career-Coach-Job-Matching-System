import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { submitAnswer } from "../controllers/interviewAnswerController.js";

const router = express.Router();

router.post("/submit", authMiddleware, submitAnswer);

export default router;