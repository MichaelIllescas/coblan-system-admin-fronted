const validateResetPasswordForm = ({ password, confirmPassword }) => {
  const errors = {};

  if (!password || password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden.";
  }

  return errors;
};

export default validateResetPasswordForm;
