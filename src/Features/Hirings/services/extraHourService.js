import apiClient from "../../../services/apiClient";
export const createExtraHour = async (data) => {
  const response = await apiClient.post('/work-hours/extra-hours', data);
  return response.data;
};
