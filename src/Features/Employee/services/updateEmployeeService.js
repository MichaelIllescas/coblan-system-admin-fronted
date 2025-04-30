import apiClient from "../../../Services/apiClient";

export const updateEmployee = async (id, updatedData) => {
  const response = await apiClient.put(`/employees/update/${id}`, updatedData);
  return response.data;
};
