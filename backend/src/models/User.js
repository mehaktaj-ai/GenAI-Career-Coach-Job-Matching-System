import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    
  
    role: {
      type: String,
      enum: ["student", "recruiter", "admin"],
      default: "student",
    },
    phone: {
      type: String,
      default: ""
    },

    bio: {
      type: String,
      default: ""
    },

    location: {
      type: String,
      default: ""
    },

    profilePicture: {
      type: String,
      default: ""
    },

    skills: {
      type: [String],
      default: []
    },

    education: {
      type: Array,
      default: []
    },

    experience: {
      type: Array,
      default: []
    },

    certifications: {
      type: Array,
      default: []
    },

    socialLinks: {
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
      portfolio: { type: String, default: "" }
    },

    careerGoal: {
      desiredRole: { type: String, default: "" },
      preferredCompany: { type: String, default: "" },
      expectedSalary: { type: String, default: "" }
    },
    
  skillsOverview: {
    type: Number,
    default: 0
  },
  
  projectMatchProgress: {
    type: Number,
    default: 0
  },
  keyInsights: {
    type: String,
    default: ""
  },

  careerRoadmap: {
    type: [String],
    default: []
  },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;