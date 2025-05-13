import apiClient from "../../../Services/apiClient";

const getPendingHoursByDate = async (date) => {
  const response = await apiClient.get('/work-hours/pending-by-date', {
    params: { date }
  });
  return response.data;
};

const getPendingHoursByMonthAndYear = async (month, year) => {
  const response = await apiClient.get('/work-hours/pending', {
    params: { month, year }
  });
  return response.data;
};

export default {
  getPendingHoursByDate,
  getPendingHoursByMonthAndYear
};
