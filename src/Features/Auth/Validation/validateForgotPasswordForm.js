const validateForgotPasswordForm = (email) => {
  const errors = {};

  if (!email.trim()) {
    errors.email = "El correo es obligatorio.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    errors.email = "Correo electrónico no válido.";
  }

  return errors;
};

export default validateForgotPasswordForm;
