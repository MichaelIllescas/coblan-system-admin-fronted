import apiClient from "../../../Services/apiClient";

export const updateSalary = async (id, data) => {
    const response = await apiClient.put(`/salary-payments/${id}`, data);
    return response.data;
  };