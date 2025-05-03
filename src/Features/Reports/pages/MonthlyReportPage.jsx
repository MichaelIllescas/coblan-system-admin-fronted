import useMonthlyReport from "../hooks/useMonthlyReport";
import MonthYearSearch from '../../../Components/DateSerarch/MonthYearSearch'
import MonthlyProfitChart from "../../Dashboard/components/MonthlyProfitChart";
import MonthlyReportChart from "../components/MonthlyReportChart";

const MonthlyReportPage = () => {
  const { report, loading, error, fetchReport } = useMonthlyReport();

  return (
    <div className="container mt-1 text-white">
      <h1 className="mb-4">Reporte Financiero Mensual</h1>

      <MonthYearSearch onSearch={fetchReport}>
        {loading && <p className="mt-3">Cargando...</p>}
        {error && <p className="text-danger mt-3">{error}</p>}

      
      </MonthYearSearch>

      {/* Gráfico de ganancias anuales (estático por ahora) */}
      <div className="mt-4">
      {report && (
  <>
    <div className="card mt-3 shadow p-4 mb-4">
      <h5>Resultados</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Ingresos: ${report.totalIncome}</li>
        <li className="list-group-item">Egresos: ${report.totalExpenses}</li>
        <li className="list-group-item">Salarios: ${report.totalSalaries}</li>
        <li className="list-group-item fw-bold">
          Balance:{" "}
          <span className={report.balance >= 0 ? "text-success" : "text-danger"}>
            ${report.balance}
          </span>
        </li>
      </ul>
    </div>

    <MonthlyReportChart report={report} />
  </>
)}

      </div>
    </div>
  );
};

export default MonthlyReportPage;
