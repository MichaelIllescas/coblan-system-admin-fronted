import { useState } from 'react';
import workHourService from '../services/workHourService';

const usePendingHoursByMonth = () => {
  const [loading, setLoading] = useState(false);

  const fetchPendingByMonthYear = async (month, year, onSuccess) => {
    setLoading(true);
    try {
      const result = await workHourService.getPendingHoursByMonthAndYear(month, year);
      onSuccess(result);
    } catch (error) {
      console.error('Error al obtener horas por mes y año:', error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchPendingByMonthYear, loading };
};

export default usePendingHoursByMonth;
