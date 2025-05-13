import apiClient from "../../../Services/apiClient";

export const deleteService = async (id) => {
  const response = await apiClient.delete(`/services/${id}`);
  return response.data;
};
