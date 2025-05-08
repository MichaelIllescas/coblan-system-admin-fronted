// src/hooks/useChangePassword.js
import { useState } from "react";
import changePasswordService from "../services/changePasswordService";
import { showErrorAlert, showSuccessAlert } from "../../../Components/Alerts/alerts";

const useChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const changePassword = async (current, newPass, repeatPass) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await changePasswordService(current, newPass, repeatPass);
      setSuccess(true);
        showSuccessAlert('Éxito', 'Clave actualizada correctamente')
    } catch (err) {
      setError(err.response?.data?.error || "Error al cambiar contraseña");
      showErrorAlert("Error", error );
    } finally {
      setLoading(false);
    }
  };

  return {
    changePassword,
    loading,
    error,
    success,
    setError,
    setSuccess,
  };
};

export default useChangePassword;
