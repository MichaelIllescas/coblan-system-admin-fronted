import { useState } from 'react';
import { deletePayment } from '../services/deletePaymentSalaryService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';
import Swal from 'sweetalert2';

/**
 * Hook para eliminar un cliente con confirmación y alertas
 */
const useSalaryDelete = () => {
    const [loading, setLoading] = useState(false);
  
    const handleDelete = async ({ id, salaryName, onSuccess }) => {
      setLoading(true);
      try {
        await deletePayment(id);
        if (onSuccess) await onSuccess();
  
        showSuccessAlert('Pago eliminado', `Se eliminó correctamente el pago del salario a ${salaryName}`);
      } catch (err) {
        const backendMessage =
          err.response?.data?.error ||
          err.response?.data?.message ||
          'No se pudo eliminar el pago';
  
        showErrorAlert('Error', backendMessage);
      } finally {
        setLoading(false);
      }
    };
  
    return { handleDelete, loading };
  };

export default useSalaryDelete;
