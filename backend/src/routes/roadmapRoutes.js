import express from "express";
import { getRoadmap } from "../controllers/roadmapController.js";

const router = express.Router();

router.get("/", getRoadmap);

export default router;