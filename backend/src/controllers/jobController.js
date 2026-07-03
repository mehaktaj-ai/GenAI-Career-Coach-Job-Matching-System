import User from "../models/User.js";
import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const matchJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    const user = await User.findById(req.user.id);

    const matchedJobs = jobs.map((job) => {
  const matchedSkills = job.skillsRequired.filter((skill) =>
    user.skills.includes(skill)
  );

  const matchPercentage =
    job.skillsRequired.length === 0
      ? 0
      : Math.round(
          (matchedSkills.length / job.skillsRequired.length) * 100
        );

  return {
    ...job.toObject(),
    matchPercentage,
  };
});

    res.json({
  matchedJobs,

  matchPercentage:
    matchedJobs.length > 0
      ? Math.round(
          matchedJobs.reduce(
            (sum, job) => sum + job.matchPercentage,
            0
          ) / matchedJobs.length
        )
      : 0,

  activeJobs: jobs.length,
  matchVelocity: 12,

  technicalSkills: 98,
  problemSolving: 95,
  teamwork: 92,

  topSkill: "Python",
  analyticsSkill: "SQL",
  certification: "AWS Cloud",
  languages: "English, Hindi",
  recognition: "Top 5% Coder"
});

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};