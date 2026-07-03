import openai from "../config/openai.js";
import Chat from "../models/Chat.js";

export const getChat = async (req, res) => {
  try {
    let chat = await Chat.findOne();

    if (!chat) {
      chat = await Chat.create({
        matchScore: 92,
        messages: [
          {
            role: "ai",
            text: "Hello Mehak. Let's start your AI interview simulation.",
          },
        ],
        skills: [
          "Python",
          "Machine Learning",
          "TensorFlow",
          "React JS",
          "Tailwind CSS",
          "API Integration",
          "Data Analytics",
          "AWS",
        ],
        recommendation:
          "Practice more system design and ML model explanation for interviews.",
      });
    }

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    let chat = await Chat.findOne();

    if (!chat) {
      chat = await Chat.create({
        matchScore: 92,
        messages: [],
        skills: [],
        recommendation: "",
      });
    }

    chat.messages.push({
      role: "user",
      text: message,
    });

    const msg = message.toLowerCase();
    let aiText = "";

    if (msg.includes("hello") || msg.includes("hi")) {
      aiText = "Hello! 👋 I'm your AI Career Coach. I can help you with careers, resumes, interviews, programming, AI, ML, and job preparation. What would you like to know?";
    }
    else if (msg.includes("python")) {
      aiText = "Python is one of the best programming languages for AI, Machine Learning, Web Development, Automation, and Data Science. Start with variables, loops, functions, OOP, then learn NumPy, Pandas, and Flask.";
    }
    else if (msg.includes("react")) {
      aiText = "React is a JavaScript library used to build fast and interactive user interfaces. Learn components, props, state, hooks, routing, and API integration.";
    }
    else if (msg.includes("sql")) {
      aiText = "SQL is used to store and retrieve data from databases. Learn SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, and normalization.";
    }
    else if (msg.includes("machine learning") || msg.includes("ml")) {
      aiText = "To become an ML Engineer, learn Python, Mathematics, Statistics, NumPy, Pandas, Scikit-learn, TensorFlow, and build projects like spam detection, recommendation systems, and image classification.";
    }
    else if (msg.includes("resume")) {
      aiText = "A strong resume should include your education, technical skills, projects, internships, certifications, and achievements. Keep it to one page and highlight measurable results.";
    }
    else if (msg.includes("interview")) {
      aiText = "Prepare for interviews by practicing DSA, DBMS, SQL, Operating Systems, Computer Networks, aptitude, and explaining your projects confidently.";
    }
    else if (msg.includes("job")) {
      aiText = "As a BCA student, you can apply for Software Developer, Web Developer, Frontend Developer, Backend Developer, Data Analyst, QA Engineer, and AI Intern roles.";
    }
    else if (msg.includes("roadmap")) {
      aiText = "Roadmap: Python → SQL → DSA → HTML/CSS → JavaScript → React → Node.js → MongoDB → Machine Learning → Build Projects → Interview Preparation.";
    }
    else if (msg.includes("project")) {
      aiText = "Projects are very important. Build Resume Analyzer, AI Career Coach, Chatbot, E-commerce Website, Student Management System, and Machine Learning applications.";
    }
    else {
      aiText = "That's a great question! Based on your profile, I recommend strengthening your programming skills, building practical projects, and preparing consistently for technical interviews.";
    }

    chat.messages.push({
      role: "ai",
      text: aiText,
    });

    await chat.save();

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};