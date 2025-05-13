import apiClient from "../../../Services/apiClient";

export const getAllHirings = async () => {
  const response = await apiClient.get('/hirings');
  return response.data;
};