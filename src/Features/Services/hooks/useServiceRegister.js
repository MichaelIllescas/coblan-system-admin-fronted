import { useState } from 'react';
import { registerService } from '../services/registerService';

export const useRegisterService = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegisterService = async (formData, resetForm) => {
        try {
            await registerService(formData);
            setSuccessMessage('Servicio registrado exitosamente');
            setErrorMessage(null);
            resetForm();
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Ocurrió un error');
            setSuccessMessage(null);
        }
    };

    return {
        handleRegisterService,
        errorMessage,
        successMessage,
    };
};
