import express from "express";

import {
  studentDashboard,
  recruiterDashboard,
  adminDashboard,
} from "../controllers/dashboardController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/student",
    authMiddleware,
  studentDashboard
  
);

router.get(
  "/recruiter",
  recruiterDashboard
);

router.get(
  "/admin",
    authMiddleware,
  adminDashboard
);

export default router;