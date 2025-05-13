import apiClient from "../../../Services/apiClient";

export const updateExpense = async (id, data) => {
    const response = await apiClient.put(`/expenses/${id}`, data);
    return response.data;
  };