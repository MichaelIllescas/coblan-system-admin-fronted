import { useState } from 'react';
import { deleteExpense } from '../services/deleteExpenseService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';
import Swal from 'sweetalert2';

/**
 * Hook para eliminar un cliente con confirmación y alertas
 */
const useExpenseDelete = () => {
    const [loading, setLoading] = useState(false);
  
    const handleDelete = async ({ id, expenseName, onSuccess }) => {
      setLoading(true);
      try {
        await deleteExpense(id);
        if (onSuccess) await onSuccess();
  
        showSuccessAlert('Gasto eliminado', `Se eliminó correctamente a ${expenseName}`);
      } catch (err) {
        const backendMessage =
          err.response?.data?.error ||
          err.response?.data?.message ||
          'No se pudo eliminar el gasto';
  
        showErrorAlert('Error', backendMessage);
      } finally {
        setLoading(false);
      }
    };
  
    return { handleDelete, loading };
  };

export default useExpenseDelete;
