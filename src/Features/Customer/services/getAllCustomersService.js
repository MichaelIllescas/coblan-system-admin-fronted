import apiClient from "../../../Services/apiClient";

export const getAllCustomers = async () => {
  const response = await apiClient.get('/customers'); // ← Ajusta según tu endpoint real
  return response.data;
};