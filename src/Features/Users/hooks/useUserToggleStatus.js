import { useState } from 'react';
import { toggleStatus } from '../services/toggleStatusService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';

const useUserStatusToggle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleToggleStatus = async ({ user, onSuccess, onClose }) => {
    if (!user) return;

    setLoading(true);
    setError(null);



    try {
      await toggleStatus(user.id);

      if (onSuccess) await onSuccess();
      if (onClose) onClose();

      showSuccessAlert(
        'Estado actualizado',
        `El usuario ${user.firstName} ${user.lastName} fue ${user.enabled ? 'activado' : 'desactivado'} correctamente.`
      );
    } catch (err) {
      console.error('Error al cambiar estado del usuario', err);
      showErrorAlert(
        'Error',
        err.response?.data?.error || 'No se pudo cambiar el estado del usuario'
      );
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleToggleStatus, loading, error };
};

export default useUserStatusToggle;
