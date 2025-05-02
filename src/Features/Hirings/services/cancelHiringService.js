import apiClient from "../../../Services/apiClient";

export const cancelHiring = async (id) => {
  const response = await apiClient.patch(`/hirings/${id}/cancel`);
  return response.data;
};