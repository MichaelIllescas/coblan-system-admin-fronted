import apiClient from "../../Services/apiClient";

export const fetchEmployees = async () => {
  const response = await apiClient.get('/employees/getAll'); 
  return response.data;
};
