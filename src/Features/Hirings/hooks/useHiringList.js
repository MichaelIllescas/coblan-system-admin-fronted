import { useEffect, useState } from 'react';
import { getAllHirings } from '../services/getAllHiringsService';

const useHiringsList = () => {
  const [hirings, setHirings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHirings = async () => {
    try {
      setLoading(true); 
      const data = await getAllHirings();
      setHirings(data);
    } catch (err) {
      setError(err.message || 'Error al obtener las contrataciones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHirings();
  }, []);

  return { hirings, loading, error, refetch: fetchHirings, fetchHirings };
};

export default useHiringsList;
