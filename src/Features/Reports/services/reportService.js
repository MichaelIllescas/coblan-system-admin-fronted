import apiClient from "../../../Services/apiClient";

export const getMonthlyReport = async (month, year) => {
  const response = await apiClient.get("/reports/monthly", {
    params: { month, year },
  });
  return response.data;
};


