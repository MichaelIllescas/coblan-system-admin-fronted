import apiClient from "../../../Services/apiClient";

export const toggleStatus = async (id) => {
  const response = await apiClient.put(`/users/toggle-status/${id}`);
  return response.data;
};
