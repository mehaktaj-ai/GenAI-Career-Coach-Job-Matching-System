  import Interview from "../models/Interview.js";

  export const getInterviewData = async (req, res) => {
    try {
      const interview = await Interview.findOne();

      if (!interview) {
        return res.status(404).json({
          message: "Interview data not found",
        });
      }

      res.status(200).json(interview);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };