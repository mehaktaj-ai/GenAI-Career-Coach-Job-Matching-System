import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    registrations: Number,
    placements: Number,
    aiUsage: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Analytics", analyticsSchema);