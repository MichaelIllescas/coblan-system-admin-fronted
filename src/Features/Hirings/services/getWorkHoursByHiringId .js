import apiClient from "../../../Services/apiClient";

const getWorkHoursByHiringId = async (hiringId) => {
  const response = await apiClient.get(`/hirings/${hiringId}/work-hours`);
  return response.data;
};

export default {
  getWorkHoursByHiringId,
};
