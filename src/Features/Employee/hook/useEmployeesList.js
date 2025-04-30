// hooks/useCustomerList.js
import { useEffect, useState } from 'react';
import { getAllEmployees } from '../services/getAllEmployeesService';

const useEmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getAllEmployees();
        setEmployees(data);
      } catch (err) {
        setError(err.message || 'Error al obtener los empleados');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, error };
};

export default useEmployeesList;
