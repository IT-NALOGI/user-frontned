import axios from 'axios';

const API_URL = 'http://localhost:3000/users/users'; // Update to match your API gateway URL

export const fetchAllUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
