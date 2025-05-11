import { useEffect, useState } from 'react';
import apiClient from '../../../Services/apiClient'; // adaptá esta ruta si tu apiClient está en otro lugar

const useDashboardStats = () => {
  const [stats, setStats] = useState({
    customers: 0,
    employees: 0,
    hirings: 0,
    services: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/reports/dashboard/stats');
      setStats(response.data);
      setError(null);
    } catch (err) {
      console.error('Error al obtener estadísticas:', err);
      setError('No se pudieron cargar las estadísticas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { stats, loading, error, refetch: fetchStats };
};

export default useDashboardStats;
