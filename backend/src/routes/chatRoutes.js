import express from "express";
import { getChat, sendMessage } from "../controllers/chatController.js";

const router = express.Router();

router.get("/", getChat);
router.post("/send", sendMessage);

export default router;