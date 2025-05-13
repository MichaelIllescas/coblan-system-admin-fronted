import { useState } from 'react';
import { cancelHiring } from '../services/cancelHiringService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';

const useCancelHiring = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleCancel = async ({ hiringSelected, onSuccess, onClose }) => {
    if (!hiringSelected) return;

    setLoading(true);
    setError(null);

 

    try {
      await cancelHiring(hiringSelected.id);

      if (onSuccess) await onSuccess();
      if (onClose) onClose();

      showSuccessAlert(
        'Estado actualizado',
        `La contratacion  fue cancelada correctamente.`
      );
    } catch (err) {
      console.error('Error al cancelar la contratacion', err);
      showErrorAlert(
        'Error',
        err.response?.data?.error || 'No se pudo cancelar la contratacion'
      );
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleCancel, loading, error };
};

export default useCancelHiring;
