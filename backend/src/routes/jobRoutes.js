import express from "express";

import {
  getJobs,
  matchJobs,
} from "../controllers/jobController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getJobs);

router.get(
  "/match",
  authMiddleware,
  matchJobs
);

export default router;