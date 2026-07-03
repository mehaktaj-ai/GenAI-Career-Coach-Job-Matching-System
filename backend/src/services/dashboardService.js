import axios from "axios";

const API = "http://localhost:5000/api/dashboard";

export const getDashboardData = async () => {
  const token = localStorage.getItem("token");

  console.log("Token from LocalStorage:", token);

  return axios.get(`${API}/student`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};