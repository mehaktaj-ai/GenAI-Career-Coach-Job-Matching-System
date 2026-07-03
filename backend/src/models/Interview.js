import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  interviewTitle: String,
  candidateName: String,
  candidateAvatar: String,
  questionNumber: Number,
  question: String,
  transcription: String,
  focusScore: Number,
  performanceScore: Number,
  clarity: Number,
  relevance: Number,
  confidence: Number,
  techAccuracy: Number,
  feedback: String,
  interviewMatchScore: Number,
  skills: Array,
  quickAccess: Array,
  quote: String,
  submitButtonText: String,
  practiceButtonText: String,
  recommendation: String,
});

export default mongoose.model("Interview", interviewSchema);