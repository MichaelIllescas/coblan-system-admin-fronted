import { useState } from 'react';
import { registerExpense } from '../services/ExpenseRegisterService';

export const useRegisterExpense = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegisterExpense = async (formData, resetForm) => {
        try {
            await registerExpense(formData);
            setSuccessMessage('Gasto registrado exitosamente');
            setErrorMessage(null);
            resetForm();
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Ocurrió un error');
            setSuccessMessage(null);
        }
    };

    return {
        handleRegisterExpense,
        errorMessage,
        successMessage,
    };
};
