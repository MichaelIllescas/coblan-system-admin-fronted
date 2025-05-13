const validateChangePasswordForm = (values) => {
    const errors = {};
  
    if (!values.currentPassword) {
      errors.currentPassword = "Campo obligatorio";
    }
  
    if (!values.newPassword) {
      errors.newPassword = "Campo obligatorio";
    } else if (values.newPassword.length < 6) {
      errors.newPassword = "Debe tener al menos 6 caracteres";
    }
  
    if (!values.confirmNewPassword) {
      errors.confirmNewPassword = "Campo obligatorio";
    } else if (values.newPassword !== values.confirmNewPassword) {
      errors.confirmNewPassword = "Las contraseñas no coinciden";
    }
  
    return errors;
  };
  
  export default validateChangePasswordForm;
  