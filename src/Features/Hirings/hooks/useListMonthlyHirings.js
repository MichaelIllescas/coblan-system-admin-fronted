import { useState } from "react";
import { getMonthlyHiringsReport } from "../services/hiringReportService";

function useListMonthlyHirings() {
  const [hirings, setHirings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHirings = async ({ month, year }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMonthlyHiringsReport(month, year);
      setHirings(data);
    } catch (err) {
      console.error("Error al obtener contrataciones mensuales:", err);
      setError("No se pudieron cargar las contrataciones");
    } finally {
      setLoading(false);
    }
  };

  return { hirings, loading, error, fetchHirings };
}

export default useListMonthlyHirings;
