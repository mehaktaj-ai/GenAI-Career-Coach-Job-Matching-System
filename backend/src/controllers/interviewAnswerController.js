import InterviewAnswer from "../models/InterviewAnswer.js";

const questions = [
  "Tell me about the specific Machine Learning models and metrics you used in your Mutual Funds prediction project.",
  "What is the difference between Supervised and Unsupervised Learning?",
  "Explain Random Forest.",
  "What evaluation metrics are used for classification?",
  "Tell me about your final year project."
];

export const submitAnswer = async (req, res) => {
  try {
    await InterviewAnswer.create({
      userId: req.user.id,
      question: req.body.question,
      answer: req.body.answer,
    });

    // Find current question
    const currentIndex = questions.findIndex(
      (q) => q.trim() === req.body.question.trim()
    );

    const words = req.body.answer.trim().split(/\s+/).length;

let score = 60;

if (words >= 120) {
  score = 95;
} else if (words >= 90) {
  score = 90;
} else if (words >= 70) {
  score = 85;
} else if (words >= 50) {
  score = 75;
} else {
  score = 65;
}

    // If question not found
    if (currentIndex === -1) {
      return res.status(400).json({
        success: false,
        message: "Question not found",
      });
    }

    // Last question completed
    if (currentIndex === questions.length - 1) {
      return res.json({
        success: true,
        interviewFinished: true,
        score,
        result: score >= 70 ? "PASS" : "FAIL",
      });
    }

    // Send next question
    return res.json({
      success: true,
      interviewFinished: false,
      score,
      nextQuestion: questions[currentIndex + 1],
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};