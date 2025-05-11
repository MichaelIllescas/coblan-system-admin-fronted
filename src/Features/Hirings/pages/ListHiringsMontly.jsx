import React, { useState } from "react";
import useListMonthlyHirings from "../hooks/useListMonthlyHirings";
import DataTable from "../../../Components/Tables/DataTable";
import DateFilter from "../../../Components/DataFilter/DateFilter";
import { FaEye, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useExtraHour from "../hooks/useExtraHour";
import ExtraHourModal from "../components/ExtraHourModal";

const ListHiringsMonthly = () => {
  const { hirings, loading, fetchHirings } = useListMonthlyHirings();
  const navigate = useNavigate();

  // dentro del componente:
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHiring, setSelectedHiring] = useState(null);
  const { addExtraHour } = useExtraHour();

  const openModal = (hiring) => {
    setSelectedHiring(hiring);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Cliente", accessor: "customerName" },
    { Header: "Servicio", accessor: "serviceName" },
    { Header: "Empleado", accessor: "employeeName" },
    {
      Header: "Monto Total",
      accessor: "totalAmount",
      Cell: ({ value }) => `$${value}`,
    },
    {
      Header: "Estado",
      accessor: "status",
      Cell: ({ value }) => {
        switch (value) {
          case "ACTIVE":
            return "ACTIVA";
          case "CANCELLED":
            return "CANCELADA";
          case "CONFIRMED":
            return "CONFIRMADA";
          default:
            return value;
        }
      },
    },

    {
      Header: "Acciones",
      accessor: "actions",
      Cell: ({ row }) => (
        <>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => handleViewWorkHours(row.original.id)}
            title="Ver Horas de la contratacion "
          >
            <FaEye />
          </button>

          <button
            disabled={
              !(
                row.original.status === "ACTIVE" ||
                row.original.status === "CONFIRMED"
              )
            }
            className="btn btn-outline-success btn-sm"
            title="Agregar hora extra"
            onClick={() => openModal(row.original)}
          >
            <FaPlus />
          </button>
        </>
      ),
    },
  ];

  const handleFilter = ({ month, year }) => {
    fetchHirings({ month, year });
  };

  const handleViewWorkHours = (hiringId) => {
    navigate(`/hirings/${hiringId}/hours`);
  };

  return (
    <div className="container">
      <h1 className="text-white">Contrataciones mensuales</h1>
      <DateFilter onFilter={handleFilter} />
      {loading ? (
        <p>Cargando contrataciones...</p>
      ) : (
        <div className="m-auto table-responsive" style={{ maxWidth: "80vw" }}>
          <DataTable columns={columns} data={hirings} />
        </div>
      )}

      <ExtraHourModal
        show={modalOpen}
        onHide={closeModal}
        onSubmit={addExtraHour}
        hiringId={selectedHiring?.id}
        employeeId={selectedHiring?.employeeId}
      />
    </div>
  );
};

export default ListHiringsMonthly;
