import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHiringWorkHours from "../hooks/useHiringWorkHours";
import DataTable from "../../../Components/Tables/DataTable";
import { FaCheckCircle } from "react-icons/fa";
import ConfirmHourModal from "../components/ConfirmHourModal";

const WorkHoursPage = () => {
  const { hiringId } = useParams();
  const { workHours, loading, fetchWorkHours } = useHiringWorkHours();

  const [showModal, setShowModal] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);

  useEffect(() => {
    fetchWorkHours(hiringId);
  }, [hiringId]);

  const handleOpenModal = (hour) => {
    setSelectedHour(hour);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHour(null);
  };
const columns = [
  { Header: "ID", accessor: "id" },
  { Header: "Fecha Asignada", accessor: "date" },
  { Header: "Horario", accessor: "hour"},
  { Header: "Duración (Mins.)", accessor: "duration" },
  { Header: "Tipo", accessor: "type" },
  { Header: "Empleado Asignado", accessor: "employeeName" },
  {
    Header: "Fecha de realización",
    accessor: "confirmationDate",
    Cell: ({ value }) => value ? value : "---"
  },
  {
    Header: "Hora de realización",
    accessor: "confirmationHour",
    Cell: ({ value }) => value ? value : "---"
  },
  
  
  {
    Header: "Estado",
    accessor: "status",
    Cell: ({ value }) => {
      switch (value) {
        case "PENDING":
          return "PENDIENTE";
        case "CANCELLED":
          return "CANCELADA";
        case "CONFIRMED":
          return "CONFIRMADA";
        default:
          return value;
      }
    }
  },
  {
    Header: "Acciones",
    accessor: "actions",
    Cell: ({ row }) => {
      const isPending = row.original.status === "PENDING";
      return isPending ? (
        <button
          className="btn btn-success btn-sm"
          title="Confirmar esta hora"
          onClick={() => handleOpenModal(row.original)}
        >
          <FaCheckCircle />
        </button>
      ) : null;
    }
  }
];


  return (
    <div className="container">
      <h2>Horas registradas para contratación #{hiringId}</h2>
      {loading ? (
        <p>Cargando horas...</p>
      ) : (
        <DataTable columns={columns} data={workHours || []} />
      )}

<ConfirmHourModal
  show={showModal}
  onClose={handleCloseModal}
  hour={selectedHour}
  onConfirmed={() => fetchWorkHours(hiringId)} 
/>
    </div>
   
  );
};

export default WorkHoursPage;
