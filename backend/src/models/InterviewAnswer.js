import mongoose from "mongoose";

const interviewAnswerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    question: String,
    answer: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("InterviewAnswer", interviewAnswerSchema);