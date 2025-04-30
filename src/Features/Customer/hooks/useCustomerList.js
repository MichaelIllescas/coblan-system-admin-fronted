// hooks/useCustomerList.js
import { useEffect, useState } from 'react';
import { getAllCustomers } from '../services/getAllCustomersService';

const useCustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllCustomers();
        setCustomers(data);
      } catch (err) {
        setError(err.message || 'Error al obtener los clientes');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return { customers, loading, error };
};

export default useCustomerList;
