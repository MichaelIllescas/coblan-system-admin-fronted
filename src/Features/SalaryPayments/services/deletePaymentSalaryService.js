import apiClient from "../../../Services/apiClient";

export const deletePayment = async (id) => {
  const response = await apiClient.delete(`/salary-payments/${id}`);
  return response.data;
};
