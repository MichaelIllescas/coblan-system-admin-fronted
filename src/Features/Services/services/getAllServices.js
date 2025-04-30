import apiClient from "../../../Services/apiClient";

export const getAllServices = async () => {
  const response = await apiClient.get("/services");
  return response.data;
};
