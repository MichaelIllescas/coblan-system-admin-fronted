import { useState } from 'react';
import { registerEmployee } from '../services/EmployeeRegisterService';
import { showSuccessAlert } from '../../../Components/Alerts/alerts';

export const useEmplooyeRegistration = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegisterEmployee = async (formData, resetForm) => {
        try {
            await registerEmployee(formData);
            setErrorMessage(null);
            showSuccessAlert('Éxito', 'Empleado registrado correctamente');
            resetForm();
        } catch (error) {
            setErrorMessage(error.response?.data?.error || 'Ocurrió un error');
            setSuccessMessage(null);
        }
    };

    return {
        handleRegisterEmployee,
        errorMessage,
        successMessage,
    };
};
