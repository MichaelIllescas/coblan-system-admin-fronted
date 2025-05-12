import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  BarController // ✅ necesario para asegurar compatibilidad en prod
} from 'chart.js';
import { Bar } from 'react-chartjs-2'; // ✅ usamos Bar directamente

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, BarController); // ✅ incluido

const MonthlyReportChart = ({ report }) => {
  if (!report) return null;

  const labels = ['💰 Ingresos', '📉 Egresos', '👥 Salarios', '📊 Balance'];
  const dataValues = [
    report.totalIncome,
    report.totalExpenses,
    report.totalSalaries,
    report.balance,
  ];

  const colors = [
    'rgba(0, 123, 255, 0.7)',   // azul ingresos
    'rgba(220, 53, 69, 0.7)',   // rojo egresos
    'rgba(255, 193, 7, 0.7)',   // amarillo salarios
    report.balance >= 0 ? 'rgba(40, 167, 69, 0.7)' : 'rgba(220, 53, 69, 0.7)', // verde o rojo
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Montos ($)',
        data: dataValues,
        backgroundColor: colors,
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 100,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: $${context.parsed.y.toLocaleString()}`,
        },
        backgroundColor: '#212529',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 16, weight: 'bold' },
          color: '#333',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: (context) => {
            return context.tick.value === 0 ? '#000' : '#eee';
          },
          lineWidth: (context) => {
            return context.tick.value === 0 ? 2 : 1;
          },
        },
        ticks: {
          callback: (value) => `$${value}`,
          font: { size: 16 },
          color: '#555',
        },
        title: {
          display: true,
          text: 'Montos ($)',
          color: '#666',
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="card p-4 shadow-sm mt-4">
      <h5 className="mb-4">Distribución Financiera del Mes</h5>
      <Bar data={data} options={options} /> {/* ✅ reemplazado */}
    </div>
  );
};

export default MonthlyReportChart;
