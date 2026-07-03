import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },

    status: {
      type: String,
      default: "pending"
    },

    aiScore: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;