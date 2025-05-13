import { useState } from "react";
import { registerUser } from "../services/userRegisterService";
import {
  showSuccessAlert,
  showErrorAlert,
} from "../../../Components/Alerts/alerts";

export const useRegisterUser = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const handleRegisterUser = async (formData, resetForm) => {
    try {
        setloading(true);
      await registerUser(formData);
      showSuccessAlert("Éxito", "Ususario registrado correctamente");

      setErrorMessage(null);
      resetForm();
    } catch (error) {
      showErrorAlert("Error", error.response?.data?.error);
      setSuccessMessage(null);
    }finally{
        setloading(false)
    }
  };

  return {
    handleRegisterUser,
    errorMessage,
    successMessage,
    loading
  };
};
