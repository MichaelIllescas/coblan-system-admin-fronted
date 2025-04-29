import apiClient from "../../../Services/apiClient";

export const registerUser = async (userData) => {
  const response = await apiClient.post("/users/register", userData);
  return response.data;
};
