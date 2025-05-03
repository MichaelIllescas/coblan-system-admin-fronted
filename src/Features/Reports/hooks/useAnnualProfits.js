// src/features/reports/hooks/useAnnualProfits.js
import { useState } from "react";
import { getAnnualProfits } from "../../Reports/services/AnnualReportService";

function useAnnualProfits() {
  const [profits, setProfits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAnnualProfits = async (year) => {
    try {
      setLoading(true);
      const data = await getAnnualProfits(year);
      setProfits(data.monthlyProfits);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("No se pudo cargar el reporte anual.");
    } finally {
      setLoading(false);
    }
  };

  return {
    profits,
    loading,
    error,
    fetchAnnualProfits,
  };
}

export default useAnnualProfits;
