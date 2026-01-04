import axios from 'axios';

const API_BASE_URL = 'http://localhost:8001/api/v1';

export const analyzeSequence = async (sequence) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/analyze`, {
      sequence: sequence
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || 'Error analyzing sequence';
  }
};

export const calculateGCContent = async (sequence) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/gc-content`, {
      sequence: sequence
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || 'Error calculating GC content';
  }
};

export const getComposition = async (sequence) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/composition`, {
      sequence: sequence
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || 'Error getting composition';
  }
};
