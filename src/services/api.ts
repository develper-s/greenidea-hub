
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },
};

export const ideasApi = {
  getIdeas: async () => {
    const response = await api.get('/ideas');
    return response.data;
  },
  createIdea: async (title: string, description: string) => {
    const response = await api.post('/ideas', { title, description });
    return response.data;
  },
  voteIdea: async (ideaId: number, type: 'up' | 'down') => {
    const response = await api.post(`/ideas/${ideaId}/vote`, { type });
    return response.data;
  },
  addComment: async (ideaId: number, text: string) => {
    const response = await api.post(`/ideas/${ideaId}/comment`, { text });
    return response.data;
  },
};

export default api;
