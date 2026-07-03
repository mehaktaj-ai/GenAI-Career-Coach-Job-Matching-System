import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    type: String, // admin / recruiter / student
  },
  { timestamps: true }
);

export default mongoose.model("Activity", activitySchema);