import User from "../models/User.js";
import { generateProfileAnalysis } from "../utils/aiEngine.js";

export const getProfileAnalysis = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const analysis = generateProfileAnalysis(user);

    res.json({
      success: true,
      analysis,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};