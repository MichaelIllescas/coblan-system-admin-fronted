import React, { useState } from "react";
import DataTable from "../../../Components/Tables/DataTable";
import useHiringList from "../hooks/useHiringList";

import { FaEdit } from "react-icons/fa";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

const ListHiringsPage = () => {
  const { hirings, loading, error, refetch } = useHiringList();
  
  const dayLabels = {
    MONDAY: 'Lunes',
    TUESDAY: 'Martes',
    WEDNESDAY: 'Miércoles',
    THURSDAY: 'Jueves',
    FRIDAY: 'Viernes',
    SATURDAY: 'Sábado',
    SUNDAY: 'Domingo'
  };
  const formatSchedule = (schedule) => {
    if (!schedule || schedule.length === 0) return 'Sin asignar';
  
    return schedule
      .map(({ day, hour }) => `${dayLabels[day] || day} ${hour.slice(0, 5)}`) // HH:MM
      .join(', ');
  };

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Fecha de Inicio", accessor: "startDate" },
    {
        Header: "Estado",
        accessor: "status",
        Cell: ({ value }) => {
          if (value === 'ACTIVE') return 'Activa';
          if (value === 'CANCELLED') return 'Cancelada';
          return value; 
        
      }
     } ,
    { Header: "Cliente", accessor: "customerName" },
    { Header: "Servicio", accessor: "serviceName" },
    { Header: "Empleado", accessor: "employeeName" },
    { Header: "Valor", accessor: "totalAmount" },
    {
        Header: "Cronograma",
        accessor: "schedule",
        Cell: ({ value }) => <span>{formatSchedule(value)}</span>
      },
    
    {
      Header: "Acciones",
      accessor: "actions",
      disableSortBy: true,
      Cell: ({ row }) => (
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-sm btn-action"
            onClick={() => {}}
          >
            <FaEdit size={20} />
          </button>
          <button
            className="btn btn-sm btn-action"
            onClick={() => {
            }}
          >
            {row.original.active ? (
              <MdToggleOn size={22} color="green" />
            ) : (
              <MdToggleOff size={22} color="gray" />
            )}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-white">Listado de Contrataciones</h2>

      {loading && <p className="text-white text-center">Cargando...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: "70vw" }}>
          <DataTable columns={columns} data={hirings} />
        </div>
      )}


     
   
    </div>
  );
};

export default ListHiringsPage;
