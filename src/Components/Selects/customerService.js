import apiClient from "../../Services/apiClient";

export const fetchCustomer = async () => {
  const response = await apiClient.get('/customers'); 
  return response.data;
};
