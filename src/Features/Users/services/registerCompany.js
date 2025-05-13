import apiClient from "../../../Services/apiClient";

export const registerCompany = (data) => {
  return apiClient.post("/companies", data);
};
