import { useState } from 'react';
import { deleteService } from '../Services/deleteService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';
import Swal from 'sweetalert2';

/**
 * Hook para eliminar un cliente con confirmación y alertas
 */
const useServiceDelete = () => {
    const [loading, setLoading] = useState(false);
  
    const handleDelete = async ({ id, serviceName, onSuccess }) => {
      setLoading(true);
      try {
        await deleteService(id);
        if (onSuccess) await onSuccess();
  
        showSuccessAlert('Servicio eliminado', `Se eliminó correctamente a ${serviceName}`);
      } catch (err) {
        const backendMessage =
          err.response?.data?.error ||
          err.response?.data?.message ||
          'No se pudo eliminar el servicio';
  
        showErrorAlert('Error', backendMessage);
      } finally {
        setLoading(false);
      }
    };
  
    return { handleDelete, loading };
  };

export default useServiceDelete;
