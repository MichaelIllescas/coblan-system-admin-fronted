import apiClient from "../../../Services/apiClient";

export const sendForgotPasswordEmail = async (email) => {
  return apiClient.post("/auth/forgot-password", { email });
};
