import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const getAudioFiles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/audio/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching audio files:", error);
    throw error; 
  }
};

export const postAudioFiles = async (title, file) => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    const response = await axios.post(`${BASE_URL}/api/audio/`, formData);

    return response.data;
  } catch (error) {
    console.error("Error posting audio files:", error);
    throw error; 
  }
};