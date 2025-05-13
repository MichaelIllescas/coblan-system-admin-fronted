import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../Service/resetPasswordService";
import validateResetPasswordForm from "../Validation/validateResetPasswordForm";

const useResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateResetPasswordForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await resetPassword(token, formData.password);
      setMessage("✅ Contraseña actualizada correctamente. Serás redirigido al inicio de sesión...");
      setSuccess(true);
      setTimeout(() => navigate("/login"), 3000);
    } catch {
      setMessage("❌ Error al actualizar la contraseña. Intenta nuevamente.");
    }
  };

  return {
    formData,
    errors,
    message,
    success,
    handleChange,
    handleSubmit,
  };
};

export default useResetPasswordForm;
