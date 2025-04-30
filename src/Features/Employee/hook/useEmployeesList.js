import { useEffect, useState } from 'react';
import { getAllEmployees } from '../services/getAllEmployeesService';

const useEmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true); // importante para que muestre el loader en un refetch manual
      const data = await getAllEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message || 'Error al obtener los empleados');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return { employees, loading, error, refetch: fetchEmployees };
};

export default useEmployeesList;
