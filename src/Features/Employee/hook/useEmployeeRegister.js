import { useState } from 'react';
import { registerEmployee } from '../services/EmployeeRegisterService';

export const useEmplooyeRegistration = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegisterEmployee = async (formData, resetForm) => {
        try {
            await registerEmployee(formData);
            setSuccessMessage('Empleado registrado exitosamente');
            setErrorMessage(null);
            resetForm();
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Ocurrió un error');
            setSuccessMessage(null);
        }
    };

    return {
        handleRegisterEmployee,
        errorMessage,
        successMessage,
    };
};
