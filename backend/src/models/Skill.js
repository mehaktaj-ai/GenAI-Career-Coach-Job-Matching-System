import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  skillName: String,
  level: String,
});

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;