import { useState } from 'react';
import { registerUser } from '../services/userRegisterService';

export const useRegisterUser= () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegisterUser = async (formData, resetForm) => {
        try {
            await registerUser(formData);
            setSuccessMessage('Usuario registrado exitosamente');
            setErrorMessage(null);
            resetForm();
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Ocurrió un error');
            setSuccessMessage(null);
        }
    };

    return {
        handleRegisterUser,
        errorMessage,
        successMessage,
    };
};
