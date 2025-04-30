// hooks/useCustomerList.js
import { useEffect, useState } from 'react';
import { getAllExpenses } from '../services/getAllExpensesService';

const useExpensesList = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchExpenses();
  }, []);

  return { expenses, loading, error };
};

export default useExpensesList;
