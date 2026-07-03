import Resume from "../models/Resume.js";
import { analyzeResume } from "../services/resumeAnalyzer.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file received",
      });
    }

    const analysis = await analyzeResume(req.file.path);

    const resume = await Resume.create({
      user: req.user.id,
      fileName: req.file.filename,
      filePath: req.file.path,
      score: analysis.score,
      skills: analysis.skills,
      suggestions: analysis.suggestions,
    });

    res.status(201).json({
      message: "Resume uploaded successfully",
      resume,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};