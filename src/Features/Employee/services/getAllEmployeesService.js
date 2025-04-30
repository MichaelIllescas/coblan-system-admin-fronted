import apiClient from "../../../Services/apiClient";

export const getAllEmployees = async () => {
  const response = await apiClient.get('/employees/getAll');
  return response.data;
};