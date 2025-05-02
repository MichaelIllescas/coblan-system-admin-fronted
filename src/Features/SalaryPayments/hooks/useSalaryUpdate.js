import { useState } from 'react';
import { updateSalary } from '../services/updateSalaryService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';

const useSalaryUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleUpdate = async ({ id, updatedData, onSuccess, onClose }) => {
    setLoading(true);
    setError(null);
   
    try {
      
       
      await updateSalary(id, updatedData);

      if (onSuccess) await onSuccess();
      if (onClose) onClose();

      showSuccessAlert(
        'Pago de Salario actualizado',
        `Los datos del pago de salario a  ${updatedData.employeeFullName} se guardaron correctamente`
      );
    } catch (err) {
      console.error('Error actualizando pago', err);
      showErrorAlert(
        'Error',
        err.response?.data?.error || 'No se pudo actualizar el pago'
      );
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdate, loading, error };
};

export default useSalaryUpdate;
