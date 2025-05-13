import { useEffect, useState } from 'react';
import  {getAllSalarys}  from '../services/getAllPaymetsService';

const useSalarysList = () => {
  const [salarysPayemnts, setSalarysPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSalarysPayments = async () => {
    try {
      setLoading(true); 
      const data = await getAllSalarys();
      setSalarysPayments(data);
    } catch (err) {
      setError(err.message || 'Error al obtener los pagos de salarios');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalarysPayments();
  }, []);

  return { salarysPayemnts, loading, error, refetch: fetchSalarysPayments, fetchSalarysPayments };
};

export default useSalarysList;
