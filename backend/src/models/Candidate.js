import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    score: Number,
    status: String,
  },
  { timestamps: true }
);

export default mongoose.model("Candidate", candidateSchema);