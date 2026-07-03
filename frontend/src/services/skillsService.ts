import axios from "axios";

const API_URL = "http://localhost:5000/api/skills";

export const getSkills = async () => {
  return await axios.get(API_URL);
};

export const addSkill = async (data: any) => {
  return await axios.post(API_URL, data);
};