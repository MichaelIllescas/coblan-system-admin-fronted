import { useState } from "react";
import hiringService from "../services/getWorkHoursByHiringId ";

const useHiringWorkHours = () => {
  const [workHours, setWorkHours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWorkHours = async (hiringId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await hiringService.getWorkHoursByHiringId(hiringId);
      setWorkHours(data);
      
    } catch (err) {
      setError("No se pudieron cargar las horas trabajadas." + err);
    } finally {
      setLoading(false);
    }
  };

  return {
    workHours,
    loading,
    error,
    fetchWorkHours,
  };
};

export default useHiringWorkHours;
