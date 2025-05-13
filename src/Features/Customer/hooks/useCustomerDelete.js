import { useState } from 'react';
import { deleteCustomer } from '../services/deleteCustomerService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';
import Swal from 'sweetalert2';

/**
 * Hook para eliminar un cliente con confirmación y alertas
 */
const useCustomerDelete = () => {
    const [loading, setLoading] = useState(false);
  
    const handleDelete = async ({ id, customerName, onSuccess }) => {
      setLoading(true);
      try {
        await deleteCustomer(id);
        if (onSuccess) await onSuccess();
  
        showSuccessAlert('Cliente eliminado', `Se eliminó correctamente a ${customerName}`);
      } catch (err) {
        const backendMessage =
          err.response?.data?.error ||
          err.response?.data?.message ||
          'No se pudo eliminar el cliente';
  
        showErrorAlert('Error', backendMessage);
      } finally {
        setLoading(false);
      }
    };
  
    return { handleDelete, loading };
  };

export default useCustomerDelete;
