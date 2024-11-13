import axios from 'axios';

const API_URL = '/api/auth';

export const register = (data) => axios.post(`${API_URL}/register`, data);

export const login = async (data) => {
    const response = await axios.post(`${API_URL}/login`, data);
    localStorage.setItem('token', response.data); // Save JWT
    return response.data;
};

export const logout = () => localStorage.removeItem('token');
