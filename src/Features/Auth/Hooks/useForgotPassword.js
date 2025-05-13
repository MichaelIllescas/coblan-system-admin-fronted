import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendForgotPasswordEmail } from "../Service/sendForgotPasswordEmail";
import validateForgotPasswordForm from "../Validation/validateForgotPasswordForm";

const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForgotPasswordForm(email);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setMensaje("");
    setErrors({});

    try {
      await sendForgotPasswordEmail(email);
      setMensaje(
        "✔️ Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.\nSerás redirigido al inicio de sesión en unos segundos..."
      );
      setEnviado(true);
      setEmail("");
    } catch (error) {
      setMensaje(`Hubo un error al procesar tu solicitud. ${error.response.data.error} Verifique su correo electrónico.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (enviado) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [enviado, navigate]);

  return {
    email,
    setEmail,
    mensaje,
    enviado,
    loading,
    errors,
    handleSubmit,
  };
};

export default useForgotPassword;
