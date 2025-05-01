import { useState } from 'react';
import { registerUser } from '../services/userRegisterService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';


export const useRegisterUser= () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegisterUser = async (formData, resetForm) => {
        try {
            await registerUser(formData);
            showSuccessAlert('Éxito', 'Ususario registrado correctamente');

            setErrorMessage(null);
            resetForm();
        } catch (error) {
            showErrorAlert('Error', error.response?.data?.error)
            setSuccessMessage(null);
        }
    };

    return {
        handleRegisterUser,
        errorMessage,
        successMessage,
    };
};
