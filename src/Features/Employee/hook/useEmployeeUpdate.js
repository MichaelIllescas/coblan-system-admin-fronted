import { useState } from 'react';
import { updateEmployee } from '../services/updateEmployeeService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';

const useEmployeeUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const handleUpdate = async ({ id, updatedData, onSuccess, onClose }) => {
    setLoading(true);
    setError(null);
    try {
      await updateEmployee(id, updatedData);

      if (onSuccess) await onSuccess();
      if (onClose) onClose();

      showSuccessAlert(
        'Empleado actualizado',
        `Los datos de ${updatedData.firstName} se guardaron correctamente`
      );
    } catch (err) {
      showErrorAlert(
        'Error',
        err.response?.data?.error || 'No se pudo actualizar el empleado'
      );
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdate, loading, error };
};

export default useEmployeeUpdate;
