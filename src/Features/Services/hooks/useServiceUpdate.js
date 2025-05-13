import { useState } from 'react';
import { updateService } from '../services/updateService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';

const useServiceUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleUpdate = async ({ id, updatedData, onSuccess, onClose }) => {
    setLoading(true);
    setError(null);
    try {
      await updateService(id, updatedData);

      if (onSuccess) await onSuccess();
      if (onClose) onClose();

      showSuccessAlert(
        'Servicio actualizado',
        `Los datos de ${updatedData.name} se guardaron correctamente`
      );
    } catch (err) {
      console.error('Error actualizando el servicio', err);
      showErrorAlert(
        'Error',
        err.response?.data?.error || 'No se pudo actualizar el servicio'
      );
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdate, loading, error };
};

export default useServiceUpdate;
