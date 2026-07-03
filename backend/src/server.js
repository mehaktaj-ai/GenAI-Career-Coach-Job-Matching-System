import "./config/env.js";

import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import recruiterRoutes from "./routes/recruiterRoutes.js";
import interviewAnswerRoutes from "./routes/interviewAnswerRoutes.js";



const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/recruiter", recruiterRoutes);
app.use("/api/interview-answer", interviewAnswerRoutes);


app.get("/", (req, res) => {
  res.send("CareerCoach AI Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});