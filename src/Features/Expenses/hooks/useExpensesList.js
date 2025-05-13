// hooks/useCustomerList.js
import { useEffect, useState } from 'react';
import { getAllExpenses } from '../services/getAllExpensesService';

const useExpensesList = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
    const fetchExpenses = async () => {
      try {
        const data = await getAllExpenses();
        setExpenses(data);
      } catch (err) {
        setError(err.message || 'Error al obtener los gastos');
      } finally {
        setLoading(false);
      }
    };

      useEffect(() => {
        fetchExpenses();
      }, []);

  return { expenses, loading, error,  refetch: fetchExpenses,  };
};

export default useExpensesList;
