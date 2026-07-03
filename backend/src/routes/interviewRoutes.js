import express from "express";
import { getInterviewData } from "../controllers/interviewController.js";

const router = express.Router();

router.get("/", getInterviewData);

export default router;