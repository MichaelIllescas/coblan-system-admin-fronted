import { useState } from 'react';
import { updateCustomer } from '../services/updateCustomerService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';
const useCustomerUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Lógica completa de actualización con control externo
   * @param {Object} params
   * @param {number} params.id - ID del cliente
   * @param {Object} params.updatedData - Datos nuevos
   * @param {Function} params.onSuccess - Acción extra (ej: refetch)
   * @param {Function} params.onClose - Cierra el modal
   */
  const handleUpdate = async ({ id, updatedData, onSuccess, onClose }) => {
    setLoading(true);
    setError(null);
    try {
      await updateCustomer(id, updatedData);

      if (onSuccess) await onSuccess();
      if (onClose) onClose();

      showSuccessAlert(
        'Cliente actualizado',
        `Los datos de ${updatedData.firstName} se guardaron correctamente`
      );
    } catch (err) {
      console.error('Error actualizando cliente', err);
      showErrorAlert(
        'Error',
        err.response?.data?.error || 'No se pudo actualizar el cliente'
      );
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdate, loading, error };
};

export default useCustomerUpdate;
