import { useState } from 'react';
import { registerCustomer } from '../services/customerService';

export const useCustomerRegistration = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegisterCustomer = async (formData, resetForm) => {
        try {
            await registerCustomer(formData);
            setSuccessMessage('Cliente registrado exitosamente');
            setErrorMessage(null);
            resetForm();
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Ocurrió un error');
            setSuccessMessage(null);
        }
    };

    return {
        handleRegisterCustomer,
        errorMessage,
        successMessage,
    };
};
