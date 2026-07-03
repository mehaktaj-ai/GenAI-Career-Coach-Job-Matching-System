import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema({
  role: String,
  stages: Array,
  skills: Array,
  tools: Array,
  careers: Array,
  tips: Array,
});

export default mongoose.model("Roadmap", roadmapSchema);