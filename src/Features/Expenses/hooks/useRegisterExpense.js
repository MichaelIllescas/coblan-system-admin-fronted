import { useState } from 'react';
import { registerExpense } from '../services/ExpenseRegisterService';
import { showSuccessAlert } from '../../../Components/Alerts/alerts';

export const useRegisterExpense = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [loading, setloading] = useState(false);
    const handleRegisterExpense = async (formData, resetForm) => {
        try {
            setloading(true);
            await registerExpense(formData);
          
            showSuccessAlert('Éxito', 'Gasto registrado exitosamente');
            setErrorMessage(null);
            resetForm();
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Ocurrió un error');
            setSuccessMessage(null);
        }finally{
               setloading(false);
        }
    };

    return {
        handleRegisterExpense,
        errorMessage,
        successMessage,
        loading
    };
};
