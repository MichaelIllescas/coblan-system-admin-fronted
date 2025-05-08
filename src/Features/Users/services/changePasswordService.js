// src/services/changePasswordService.js
import apiClient from "../../../Services/apiClient";

const changePasswordService = async (currentPassword, newPassword, repeatPassword) => {
  const response = await apiClient.put("/users/change-password", {
    currentPassword,
    newPassword,
    repeatPassword,
  });
  return response.data;
};

export default changePasswordService;
