import Roadmap from "../models/Roadmap.js";

// GET Roadmap
export const getRoadmap = async (req, res) => {
  try {
   const roadmap = await Roadmap.findOne();


    return res.status(200).json(roadmap);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};