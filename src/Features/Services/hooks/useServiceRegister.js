import { useState } from 'react';
import { registerService } from '../services/registerService';
import { showErrorAlert, showSuccessAlert } from '../../../Components/Alerts/alerts';

export const useRegisterService = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [loading, setloading] = useState(false);

    const handleRegisterService = async (formData, resetForm) => {
        try {
            setloading(true);
            await registerService(formData);
            showSuccessAlert('Éxito', 'Servicio registrado correctamente');
            setErrorMessage(null);
            resetForm();
        } catch (error) {
            
            setErrorMessage(error.response?.data?.message || 'Ocurrió un error');
            setErrorMessage(error.response?.data?.error || 'Ocurrió un error');
            showErrorAlert(errorMessage);
            setSuccessMessage(null);
        }finally{
             setloading(false);
        }
    };

    return {
        handleRegisterService,
        errorMessage,
        successMessage,
        loading
    };
};
