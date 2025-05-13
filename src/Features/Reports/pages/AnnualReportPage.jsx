// src/features/reports/pages/AnnualReportPage.jsx
import { useState } from "react";
import useAnnualProfits from "../hooks/useAnnualProfits";
import AnnualProfitChart from "../components/AnnualProfitChart";

const AnnualReportPage = () => {
  const [year, setYear] = useState(new Date().getFullYear()); // Año actual por defecto
  const { profits, loading, error, fetchAnnualProfits } = useAnnualProfits();

  const handleSearch = () => {
    if (year && !isNaN(Number(year))) {
      fetchAnnualProfits(year);
    }
  };

  return (
    <div className="container mt-1">
      <h1 className="mb-4 text-white    ">Reporte Anual de Ganancias</h1>

      <div className="card p-4 shadow-sm mb-4">
        <div className="row g-2 align-items-end">
          <div className="col-md-4">
            <label className="form-label">Año</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ej: 2025"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="col-md-auto mt-3 mt-md-0">
            <button className="btn btn-primary" onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>
      </div>

      {loading && <p className="text-secondary">Cargando...</p>}
      {error && <p className="text-danger">{error}</p>}

      {profits && Object.keys(profits).length > 0 && (
        <AnnualProfitChart profits={profits} />
      )}
    </div>
  );
};

export default AnnualReportPage;
