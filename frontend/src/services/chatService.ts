import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/chat";

export const getChat = async () => {
  return await axios.get(API_URL);
};

export const sendMessage = async (message: string) => {
  return await axios.post(`${API_URL}/send`, {
    message,
  });
};