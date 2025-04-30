import { registerCustomer } from '../services/customerService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';



 export const useCustomerRegistration = () => {
  const handleRegisterCustomer = async (formData, resetForm) => {
    try {
      await registerCustomer(formData);
      showSuccessAlert('Éxito', 'Cliente registrado correctamente');
      if (resetForm) resetForm(); 
    } catch (err) {
      const backendMessage =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        'No se pudo registrar el cliente';
      showErrorAlert('Error', backendMessage);
    }
  };

  return { handleRegisterCustomer };
};