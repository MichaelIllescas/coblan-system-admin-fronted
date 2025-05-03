import apiClient from "../../../Services/apiClient";

export const getAnnualProfits = async (year) => {
  const response = await apiClient.get("/reports/annual", {
    params: { year },
  });
  return response.data; // asumimos que devuelve un array con 12 ganancias (una por mes)
};
