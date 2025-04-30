import apiClient from "../../../Services/apiClient";

export const updateCustomer = async (id, data) => {
    const response = await apiClient.put(`/customers/${id}`, data);
    return response.data;
  };