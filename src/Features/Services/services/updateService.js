import apiClient from "../../../Services/apiClient";

export const updateService = async (id, data) => {
    const response = await apiClient.put(`/services/${id}`, data);
    return response.data;
  };