import Job from "../models/Job.js";
import Application from "../models/Application.js";
import User from "../models/User.js";

export const getRecruiterDashboard = async (req, res) => {
  try {

    // Total Candidates
    const totalCandidates = await User.countDocuments({ role: "student" });

    // Open Positions
    const openPositions = await Job.countDocuments();

    // Active Candidates
    const activeCandidates = await Application.distinct("userId").then(
      (users) => users.length
    );

    // Hires This Month
    const startOfMonth = new Date();
    startOfMonth.setDate(1);

    const hiresThisMonth = await Application.countDocuments({
      status: "hired",
      updatedAt: { $gte: startOfMonth },
    });

    // Recent Applications
    const recentApplications = await Application.find()
      .populate("userId", "name")
      .populate("jobId", "title")
      .sort({ createdAt: -1 })
      .limit(5);

    // Top Candidates
    const topCandidates = recentApplications.map((app) => ({
      name: app.userId?.name || "Unknown",
      role: app.jobId?.title || "Not specified",
      score: app.aiScore || 0,
      status: app.status || "Pending",
      color:
  app.status === "hired"
    ? "green"
    : app.status === "shortlisted"
    ? "blue"
    : app.status === "interview"
    ? "purple"
    : "gray",
    }));

    // Activity Feed
    const activities = recentApplications.map((app) => {

  const diff = Math.floor(
    (Date.now() - new Date(app.createdAt)) / (1000 * 60)
  );

  let time = "";

  if (diff < 60) time = `${diff} min ago`;
  else if (diff < 1440) time = `${Math.floor(diff / 60)} hrs ago`;
  else time = `${Math.floor(diff / 1440)} days ago`;

  return {
    title: `${app.userId?.name || "Candidate"} applied`,
    description: `Applied for ${app.jobId?.title || "a job"}`,
    time,
  };

});

    // Final Response
    res.json({
      profile: {
          name:req.user.name

      },

      stats: {
        totalCandidates,
        openPositions,
        activeCandidates,
        hiresThisMonth,
      },

      topCandidates,

      hoverCandidate: {
        name: topCandidates[0]?.name || "No Candidate",
        score: topCandidates[0]?.score || 0,
        role: topCandidates[0]?.role || "",
        company: "Career Advisor",
        skills: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "AI",
        ],
      },

      activities,

      quickAccess: [
        {
          title: "Manage Jobs",
        },
        {
          title: "Candidates",
        },
        {
          title: "Messages",
        },
        {
          title: "Analytics",
        },
      ],
    });

  } catch (error) {
    res.status(500).json({
      message: "Error loading recruiter dashboard",
      error: error.message,
    });
  }
};