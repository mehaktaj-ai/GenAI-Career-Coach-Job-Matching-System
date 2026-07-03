import Dashboard from "../models/Dashboard.js";
import User from "../models/User.js";

export const studentDashboard = async (req, res) => {
  try {
    console.log("Logged in user ID:", req.user.id);

    const dashboard = await Dashboard.findOne({ user: req.user.id });
    console.log("Dashboard Found:", dashboard);

    if (!dashboard) {
  return res.json({
    user: { name: "User" },
    stats: {
      resumeScore: 0,
      jobsMatched: 0,
      aiSessions: 0,
      careerLevel: "Beginner"
    },
    skills: {
      overall: 0,
      react: 0,
      typescript: 0,
      nodejs: 0,
      problemSolving: 0,
      sql: 0
    },
    activities: [],
    recommendation: "No data available"
  });
}
    const user = await User.findById(req.user.id);

    console.log("User Found:", user);

    res.json({
      user: {
        name: user.name,
      },

      stats: {
        resumeScore: dashboard.resumeScore,
        jobsMatched: dashboard.jobsMatched,
        aiSessions: dashboard.aiSessions,
        careerLevel: dashboard.careerLevel,
      },

      skills: {
  overall: dashboard.skills?.overall || 0,
  react: dashboard.skills?.react || 0,
  typescript: dashboard.skills?.typescript || 0,
  nodejs: dashboard.skills?.nodejs || 0,
  problemSolving: dashboard.skills?.problemSolving || 0,
  sql: dashboard.skills?.sql || 0,
},

      activities: dashboard.activities,

      recommendation: dashboard.recommendation,
    });

  } catch (error) {
    console.log("STUDENT DASHBOARD ERROR:");
    console.log(error);
    console.log(error.stack);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const recruiterDashboard = async (req, res) => {
  try {
    res.json({
      stats: {
        totalCandidates: 120,
        openPositions: 8,
        activeCandidates: 64,
        hiresThisMonth: 12,
      },

      profile: {
        name: "Mehak Taj",
        company: "CareerCoach AI",
        role: "Recruiter",
      },

      hoverCandidate: {
        name: "Rahul Sharma",
        company: "Google",
        score: 96,
        role: "Frontend Developer",
        skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      },

      topCandidates: [
        {
          id: 1,
          name: "Rahul Sharma",
          role: "Frontend Developer",
          score: 96,
          status: "Interview Scheduled",
        },
        {
          id: 2,
          name: "Aisha Khan",
          role: "React Developer",
          score: 93,
          status: "Shortlisted",
        },
        {
          id: 3,
          name: "Arjun Patel",
          role: "Node.js Developer",
          score: 90,
          status: "Pending",
        },
      ],

      activities: [
        {
          title: "New application received",
          description: "Rahul Sharma applied for Frontend Developer",
          time: "2 hours ago",
        },
        {
          title: "Interview Scheduled",
          description: "Interview scheduled with Aisha Khan",
          time: "Yesterday",
        },
      ],

      quickAccess: [
        { title: "Post New Job" },
        { title: "Review Top Matches" },
        { title: "Contact Candidates" },
        { title: "Analyze Pipelines" },
      ],
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const adminDashboard = async (req, res) => {
  try {
    res.json({
      stats: {
        totalUsers: 2540,
        activeJobs: 184,
        recruiters: 86,
        aiSessions: 1204,
      },

      analytics: {
        registrations: 85,
        placements: 72,
        aiUsage: 90,
      },

      systemStatus: [
        {
          name: "Server Status",
          status: "Online",
        },
        {
          name: "Database",
          status: "Connected",
        },
        {
          name: "AI Engine",
          status: "Active",
        },
        {
          name: "Recruitment System",
          status: "Running",
        },
      ],

      activities: [
        {
          title: "New application for AI Engineer",
          time: "2h ago",
        },
        {
          title: "Candidate A requested roadmap feedback",
          time: "1d ago",
        },
        {
          title: "Candidate B passed skill assessment",
          time: "2d ago",
        },
      ],

      quickAccess: [
        { title: "Post New Job" },
        { title: "Review Matches" },
        { title: "Contact Candidates" },
        { title: "Analyze Pipelines" },
        { title: "Verify Docs" },
        { title: "Search Talent" },
        { title: "Notifications" },
        { title: "Email Outreach" },
      ],

      profile: {
        name: "Mehak Taj",
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};