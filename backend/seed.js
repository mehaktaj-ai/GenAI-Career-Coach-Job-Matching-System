import mongoose from "mongoose";
import Activity from "./src/models/Activity.js";
import SystemStatus from "./src/models/SystemStatus.js";
import Analytics from "./src/models/Analytics.js";

async function seed() {
  await mongoose.connect("mongodb://localhost:27017/careercoach");

  await Activity.insertMany([
    { title: "New application for AI Engineer", description: "System log" },
    { title: "Candidate passed interview", description: "System log" }
  ]);

  await SystemStatus.insertMany([
    { name: "Server Status", status: "Online" },
    { name: "Database", status: "Connected" },
    { name: "AI Engine", status: "Active" }
  ]);

  await Analytics.create({
    registrations: 85,
    placements: 72,
    aiUsage: 90
  });

  console.log("✅ Seed data inserted successfully");
  process.exit();
}

seed();