import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getDashboardData = async () => {

  const token = localStorage.getItem("token");

  return await axios.get(
    `${API_URL}/dashboard/student`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};