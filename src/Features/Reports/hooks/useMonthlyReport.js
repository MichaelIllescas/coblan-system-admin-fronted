// src/features/reports/hooks/useMonthlyReport.js
import { useState } from "react";
import { getMonthlyReport } from "../../Reports/services/reportService";

function useMonthlyReport() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReport = async (month, year) => {
    try {
      setLoading(true);
      const data = await getMonthlyReport(month, year);
      setReport(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching report:", err);
      setError("No se pudo obtener el reporte.");
    } finally {
      setLoading(false);
    }
  };

  return {
    report,
    loading,
    error,
    fetchReport,
  };
}

export default useMonthlyReport;
