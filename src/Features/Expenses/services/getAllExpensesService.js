import apiClient from "../../../Services/apiClient";

export const getAllExpenses = async () => {
  const response = await apiClient.get('/expenses');
  return response.data;
};