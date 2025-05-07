import { useState } from 'react';
import { createExtraHour } from '../services/extraHourService';
import { showErrorAlert, showSuccessAlert } from '../../../Components/Alerts/alerts';

const useExtraHour = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addExtraHour = async (data) => {
    try {
      setLoading(true);
      await createExtraHour(data);
            showSuccessAlert('Éxito', 'Hora Extra agregada correctamente');
      
    } catch (err) {
      setError(err.response?.data?.error || 'Error al agregar hora extra');
      showErrorAlert('Error', 'No se pudo registrar la hora extra: ' +  err.response?.data?.error)
    } finally {
      setLoading(false);
    }
  };

  return { addExtraHour, loading, error };
};

export default useExtraHour;
