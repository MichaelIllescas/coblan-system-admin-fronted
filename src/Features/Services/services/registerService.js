import apiClient from "../../../Services/apiClient";

export const registerService = async (serviceData) => {
  const response = await apiClient.post("/services", serviceData);
  return response.data;
};
