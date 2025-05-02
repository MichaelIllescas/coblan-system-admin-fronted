import apiClient from "../../../Services/apiClient";

export const getAllSalarys = async () => {
  const response = await apiClient.get('/salary-payments');
  return response.data;
};