import mongoose from "mongoose";

const systemSchema = new mongoose.Schema(
  {
    name: String,
    status: String,
  },
  { timestamps: true }
);

export default mongoose.model("SystemStatus", systemSchema);