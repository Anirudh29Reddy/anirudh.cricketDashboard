import axios from "axios";

const API_URL = "/api/ScoreApiForTracker";


export const fetchMatchData = async (userId) => {
  try {
    const response = await axios.get(`/api/ScoreApiForTracker?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
