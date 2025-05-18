import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001'; // Using the new backend port

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitLeak = async (leakData: {
  title: string;
  content: string;
  source: string;
  tags: string;
}) => {
  try {
    const response = await api.post('/api/leaks', leakData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLeaks = async () => {
  try {
    const response = await api.get('/api/leaks');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api; 