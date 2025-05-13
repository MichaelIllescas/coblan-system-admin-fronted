// hooks/useCustomerList.js
import { useEffect, useState } from 'react';
import { getAllServices } from '../services/getAllServices';

const useServicesList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        setServices(data);
      } catch (err) {
        setError(err.message || 'Error al obtener los servicios');
      } finally {
        setLoading(false);
      }
    };
useEffect(() => {
    fetchServices();
  }, []);

  return { services, loading, error, refetch:fetchServices };
};

export default useServicesList;
