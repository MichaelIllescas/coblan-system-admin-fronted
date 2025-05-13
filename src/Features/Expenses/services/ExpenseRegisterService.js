import apiClient from "../../../Services/apiClient";

export const registerExpense = async (expenseData) => {
  const response = await apiClient.post("/expenses", expenseData);
  return response.data;
};
