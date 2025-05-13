import apiClient from "../../../Services/apiClient";

export const getAllUsers = async () => {
  const response = await apiClient.get("/users");
  return response.data;
};
