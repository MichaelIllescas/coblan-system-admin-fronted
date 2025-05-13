import { registerCustomer } from '../services/customerService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';
import { useState } from 'react';



 export const useCustomerRegistration = () => {
  const [loading, setloading] = useState(false);
  const handleRegisterCustomer = async (formData, resetForm) => {
    try {
      setloading(true);
      await registerCustomer(formData);
      showSuccessAlert('Éxito', 'Cliente registrado correctamente');
      if (resetForm) resetForm(); 
    } catch (err) {
      const backendMessage =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        'No se pudo registrar el cliente';
      showErrorAlert('Error', backendMessage);
    }finally{
      setloading(false)
    }
  };

  return { handleRegisterCustomer, loading };
};