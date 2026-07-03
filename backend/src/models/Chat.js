import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  matchScore: Number,
  messages: Array,
  skills: Array,
  recommendation: String,
});

export default mongoose.model("Chat", chatSchema);