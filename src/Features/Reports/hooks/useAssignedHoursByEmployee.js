import { useState } from 'react';
import apiClient from '../../../Services/apiClient';
const useAssignedHoursByEmployee = () => {
  const [loading, setLoading] = useState(false);

  const fetchAssignedHours = async (employeeId, month, year, onSuccess) => {
    setLoading(true);
    try {
      const response = await apiClient.get(`/work-hours/hours-worked/${employeeId}`, {
        params: { month, year }
      });
      onSuccess(response.data);
    } catch (error) {
      console.error("Error al obtener horas asignadas:", error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchAssignedHours, loading };
};

export default useAssignedHoursByEmployee;
