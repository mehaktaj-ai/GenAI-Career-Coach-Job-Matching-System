import axios from "axios";

const API_URL = "http://localhost:5000/api/resume";

export const uploadResume = async (formData: FormData) => {
  return await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};