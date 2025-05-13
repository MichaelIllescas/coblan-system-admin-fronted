import { useState } from 'react';
import workHourService from '../services/workHourService';

const usePendingHoursByDate = () => {
  const [loading, setLoading] = useState(false);

  const fetchPendingByDate = async (date, onSuccess) => {
    setLoading(true);
    try {
      const result = await workHourService.getPendingHoursByDate(date);
      onSuccess(result);
    } catch (error) {
      console.error('Error al obtener horas por fecha:', error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchPendingByDate, loading };
};

export default usePendingHoursByDate;
