import apiClient from "../../Services/apiClient";

export const fetchServices = async () => {
  const response = await apiClient.get('/services'); 
  return response.data;
};
