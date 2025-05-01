import { useState } from 'react';
import { updateExpense } from '../services/updateExpenseService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';
const useExpenseUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleUpdate = async ({ id, updatedData, onSuccess, onClose }) => {
    setLoading(true);
    setError(null);
    try {
      await updateExpense(id, updatedData);

      if (onSuccess) await onSuccess();
      if (onClose) onClose();

      showSuccessAlert(
        'Gasto actualizado',
        `Los datos del gasto ${updatedData.name} se guardaron correctamente`
      );
    } catch (err) {
      console.error('Error actualizando gasto', err);
      showErrorAlert(
        'Error',
        err.response?.data?.error || 'No se pudo actualizar el gasto'
      );
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdate, loading, error };
};

export default useExpenseUpdate;
