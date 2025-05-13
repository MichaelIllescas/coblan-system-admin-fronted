import apiClient from "../../../Services/apiClient";
export const resetPassword = (token, newPassword) => {
  return apiClient.post("/auth/reset-password", {
    token,
    newPassword
  });
};
