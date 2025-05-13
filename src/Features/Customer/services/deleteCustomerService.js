import apiClient from "../../../Services/apiClient";

export const deleteCustomer = async (id) => {
  const response = await apiClient.delete(`/customers/${id}`);
  return response.data;
};
