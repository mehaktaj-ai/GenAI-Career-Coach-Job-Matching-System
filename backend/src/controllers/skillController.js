import Skill from "../models/Skill.js";

export const addSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getSkills = async (req, res) => {
  try {
    const skill = await Skill.findOne();

    res.json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};