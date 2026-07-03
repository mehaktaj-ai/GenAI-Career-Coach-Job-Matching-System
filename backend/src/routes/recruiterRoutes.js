import express from "express";
import { getRecruiterDashboard } from "../controllers/recruiterController.js";

const router = express.Router();

router.get("/", getRecruiterDashboard);

export default router;