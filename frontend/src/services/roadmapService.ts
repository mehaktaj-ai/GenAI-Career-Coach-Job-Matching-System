import axios from "axios";

const API_URL = "http://localhost:5000/api/roadmap";

export const getRoadmap = async () => {
  return await axios.get(API_URL);
};