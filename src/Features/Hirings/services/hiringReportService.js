import apiClient from "../../../services/apiClient"; // Asegurate que el path sea correcto

/**
 * Obtiene el listado mensual de contrataciones.
 * @param {number} month - Mes (1-12)
 * @param {number} year - Año (YYYY)
 * @returns {Promise<Array>} Lista de contrataciones
 */
export const getMonthlyHiringsReport = async (month, year) => {
  const response = await apiClient.get("/hirings/list/monthly", {
    params: { month, year },
  });
  return response.data;
};
