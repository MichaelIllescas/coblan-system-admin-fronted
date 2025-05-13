import { useState } from 'react';
import { registerEmployee } from '../services/EmployeeRegisterService';
import { showSuccessAlert } from '../../../Components/Alerts/alerts';

export const useEmplooyeRegistration = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
     const [loading, setLoading] = useState(false);

    const handleRegisterEmployee = async (formData, resetForm) => {
        try {
            setLoading(true)
            await registerEmployee(formData);
            setErrorMessage(null);
            showSuccessAlert('Éxito', 'Empleado registrado correctamente');
            resetForm();
        } catch (error) {
            setErrorMessage(error.response?.data?.error || 'Ocurrió un error');
            setSuccessMessage(null);
        }finally{
            setLoading(false);
        }
    };

    return {
        handleRegisterEmployee,
        errorMessage,
        successMessage,
        loading
    };
};
