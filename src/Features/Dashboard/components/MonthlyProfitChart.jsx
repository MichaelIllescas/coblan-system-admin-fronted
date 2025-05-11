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
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import useAnnualProfits from '../../Reports/hooks/useAnnualProfits';
import FullScreenLoader from '../../../Components/Loading/FullScreenLoader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
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

  // Convertir objeto { "Enero": 0, ... } a array ordenado
  const profitsArray = labels.map((mes) => profits[mes] ?? 0);

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
      <h5 className="mb-3 text-center">Ganancias  – {currentYear}</h5>
      
      {loading && <FullScreenLoader />}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <Chart type="bar" data={data} options={options} />
      )}
    </div>
  );
};

export default MonthlyProfitChart;  