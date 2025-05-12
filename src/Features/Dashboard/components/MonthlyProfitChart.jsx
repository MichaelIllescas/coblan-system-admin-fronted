import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  BarController,
  LineController
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useAnnualProfits from '../../Reports/hooks/useAnnualProfits';
import FullScreenLoader from '../../../Components/Loading/FullScreenLoader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  BarController,   // ✅ Ahora sí están registrados
  LineController   // ✅ También
);

const labels = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const MonthlyProfitChart = () => {
  const currentYear = new Date().getFullYear();
  const { profits, loading, error, fetchAnnualProfits } = useAnnualProfits();

  useEffect(() => {
    fetchAnnualProfits(currentYear);
  }, []);

  const profitsArray = labels.map((mes) => profits?.[mes] ?? 0);

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Ganancia ($)',
        data: profitsArray,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: profitsArray,
        borderColor: 'rgb(235, 54, 199)',
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointBackgroundColor: 'rgb(235, 54, 199)',
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Mes',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Ganancia ($)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="card p-3 shadow-lg bg-light">
      <h5 className="mb-3 text-center">Ganancias – {currentYear}</h5>

      {loading && <FullScreenLoader />}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && <Bar data={data} options={options} />}
    </div>
  );
};

export default MonthlyProfitChart;
