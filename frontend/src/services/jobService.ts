import axios from "axios";

const API = "http://localhost:5000/api/jobs";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getMatchedJobs = async () => {
  return await axios.get(`${API}/match`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const getJobs = async () => {
  return await axios.get(API);
};