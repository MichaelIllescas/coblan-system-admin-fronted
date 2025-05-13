import apiClient from "../../../Services/apiClient";

export const updateCompany = (data) => {
  return apiClient.put("/companies", data);
};
