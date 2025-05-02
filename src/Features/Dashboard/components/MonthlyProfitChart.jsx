import React from 'react';
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

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const MonthlyProfitChart = () => {
  // Datos de ejemplo en duro (12 meses)
  const labels = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Ganancia ($)',
        data: [1200, 1500, 900, 1700, 2100, 2400, 1900, 2500, 2200, 2000, 2300, 2600],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: [1200, 1500, 900, 1700, 2100, 2400, 1900, 2500, 2200, 2000, 2300, 2600],
        borderColor: 'rgb(235, 54, 199)',
        borderWidth: 2,
        fill: false,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
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
      <h5 className="mb-3">Ganancias Mensuales</h5>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default MonthlyProfitChart;
