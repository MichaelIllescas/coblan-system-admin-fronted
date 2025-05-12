// src/features/reports/components/AnnualProfitChart.jsx
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
  BarController,
  LineController
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  BarController,
  LineController // ✅ necesarios para gráficos mixtos
);

const AnnualProfitChart = ({ profits }) => {
  if (!profits || Object.keys(profits).length === 0) return null;

  const labels = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const values = labels.map(label => profits?.[label] ?? 0);
  const total = values.reduce((sum, value) => sum + value, 0);

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Ganancia ($)',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: values,
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
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      x: {
        title: { display: true, text: 'Mes' },
      },
      y: {
        title: { display: true, text: 'Ganancia ($)' },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="card p-4 shadow mt-4 bg-light">
      <h5 className="mb-3">Ganancias Anuales</h5>

      {/* Gráfico */}
      <Bar data={data} options={options} /> {/* ✅ cambiado Chart por Bar */}

      {/* Resumen textual */}
      <div className="mt-4">
        <h6>Detalle mensual:</h6>
        <ul className="list-group">
          {labels.map((label, index) => (
            <li key={label} className="list-group-item d-flex justify-content-between">
              <span>{label}</span>
              <strong>${values[index].toLocaleString('es-AR')}</strong>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between bg-light fw-bold">
            <span>Total anual</span>
            <span>${total.toLocaleString('es-AR')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnnualProfitChart;
