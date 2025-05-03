import React, { useState } from 'react';
import DateSearch from '../../../Components/DateSerarch/DateSearch';
import MonthYearSearch from '../../../Components/DateSerarch/MonthYearSearch';
import DataTable from '../../../Components/Tables/DataTable';

import usePendingHoursByDate from '../hooks/usePendingHoursByDate';
import usePendingHoursByMonth from '../hooks/usePendingHoursByMonth';
import { FaCheckCircle } from 'react-icons/fa';
import ConfirmHourModal from '../components/ConfirmHourModal';

const PendingWorkHoursPage = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
   const [selectedHour, setSelectedHour] = useState(null);

  const { fetchPendingByDate } = usePendingHoursByDate();
  const { fetchPendingByMonthYear } = usePendingHoursByMonth();

  const handleDateSearch = (date) => {
    fetchPendingByDate(date, setData);
  };

  const handleMonthYearSearch = (month, year) => {
    fetchPendingByMonthYear(month, year, setData);
  };

  const handleOpenModal = (hour) => {
    setSelectedHour(hour);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHour(null);
  };

  const handleConfirmHour = (confirmedId) => {
    // 1. Cierra el modal
    handleCloseModal();
  
    // 2. Elimina la hora confirmada del listado
    setData(prevData => prevData.filter(hour => hour.id !== confirmedId));
  };
  
  const columns = [
    { Header: 'ID', accessor: 'id' },
    {Header: "Cliente", accessor: "customerName"},
    { Header: 'Empleado', accessor: 'employeeName' },
    { Header: 'Fecha', accessor: 'date' },
    { Header: 'Tipo', accessor: 'type' },
     {
        Header: "Acciones",
        accessor: "actions",
        Cell: ({ row }) => {
          const isPending = row.original.status === "PENDING";
          return isPending ? (
            <button
              className="btn btn-success btn-sm"
              title="Confirmar esta hora"
              onClick={() =>{ handleOpenModal(row.original)}}
            >
              <FaCheckCircle />
            </button>
          ) : null;
        }
      }

  ];

  return (
    <div className="container mt-1">
      <h1 className="mb-4 text-white">Consultar Horas Pendientes</h1>

      <div className="row g-4">
        <div className="col-md-6">
          <DateSearch onSearch={handleDateSearch} />
        </div>
        <div className="col-md-6">
          <MonthYearSearch onSearch={handleMonthYearSearch} />
        </div>
      </div>

      <hr className="my-5" />

      <h5>Resultado:</h5>
      <DataTable columns={columns} data={data} />

      <ConfirmHourModal
  show={showModal}
  onClose={handleCloseModal}
  hour={selectedHour}
  onConfirmed={() => handleConfirmHour(selectedHour.id)} 
/>
    </div>
  );
};

export default PendingWorkHoursPage;
