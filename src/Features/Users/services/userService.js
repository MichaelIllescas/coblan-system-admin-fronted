// services/userService.js
import apiClient from '../../../Services/apiClient'

export const getUserById = async (userId) => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};
