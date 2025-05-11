import apiClient from "../../../Services/apiClient";

export const getCompany = () => {
  return apiClient.get("/companies");
};
