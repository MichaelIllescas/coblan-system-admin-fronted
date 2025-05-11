import DataTable from "../../../Components/Tables/DataTable";
import useHiringList from "../hooks/useHiringList";
import ConfirmModal from "../../../Components/Modals/ConfirmModal";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { useState } from "react";
import useCancelHiring from "../hooks/useCancelHiring";
import WorkHoursModal from "../components/WorkHoursModal";
import useHiringWorkHours from "../hooks/useHiringWorkHours";
import FullScreenLoader from "../../../Components/Loading/FullScreenLoader";
import { formatDateToDDMMYYYY } from "../../../utils/formatDateToDDMMYYYY";
import BtnDownloadCoblanSummary from "../../../Components/PdfGenerator/BtnDownloadCoblanSummary.jsx";
import  useCompany from '../../Users/hooks/useCompany.js';

const ListHiringsPage = () => {
  const { hirings, loading, error, refetch } = useHiringList();
  const [workHoursModalVisible, setWorkHoursModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [hiringSelected, sethiringSelected] = useState(null);
  const { handleCancel } = useCancelHiring();
  const { workHours, fetchWorkHours } = useHiringWorkHours();
  const [selectedHiringId, setSelectedHiringId] = useState(null);
  const {company} = useCompany();

  const dayLabels = {
    MONDAY: "Lunes",
    TUESDAY: "Martes",
    WEDNESDAY: "Miércoles",
    THURSDAY: "Jueves",
    FRIDAY: "Viernes",
    SATURDAY: "Sábado",
    SUNDAY: "Domingo",
  };
  const formatSchedule = (schedule) => {
    if (!schedule || schedule.length === 0) return "Sin asignar";

    return schedule
      .map(({ day, hour }) => `${dayLabels[day] || day} ${hour.slice(0, 5)}`) // HH:MM
      .join(", ");
  };

  const columns = [
    { Header: "ID", accessor: "id" },

    { Header: "Cliente", accessor: "customerName" , Cell: ({row})=> `${row.original.customerName} ${row.original.customerLastName}`},
    { Header: "Domicilio", accessor: "customerAddress" },
    { Header: "Servicio", accessor: "serviceName" },
    {
      Header: "Valor",
      accessor: "totalAmount",
      Cell: ({ value }) => `$${value}`,
    },
    { Header: "Empleado", accessor: "employeeName" },
    {
      Header: "Cronograma",
      accessor: "schedule",
      Cell: ({ value }) => <span>{formatSchedule(value)}</span>,
    },
    {
      Header: "Fecha de Inicio",
      accessor: "startDate",
      Cell: ({ value }) => formatDateToDDMMYYYY(value),
    },
    {
      Header: "Estado",
      accessor: "status",
      Cell: ({ value }) => {
        if (value === "ACTIVE") return "Activa";
        if (value === "CANCELLED") return "Cancelada";
        return value;
      },
    },

    {
      Header: "Acciones",
      accessor: "actions",
      disableSortBy: true,
      Cell: ({ row }) => (
        <div className="d-flex justify-content-center gap-2">
          <button
            title="ver detalles"
            className="btn btn-sm btn-action"
            onClick={() => {
              const id = row.original.id;
              setSelectedHiringId(id);
              fetchWorkHours(id);
              setWorkHoursModalVisible(true);
            }}
          >
            <FaEye size={20} />
          </button>
          <button
            title="Anular contratacion"
            className="btn btn-sm btn-action"
            onClick={() => {
              if (row.original.status == "CANCELLED") return;
              sethiringSelected(row.original);
              setStatusModalVisible(true);
            }}
          >
            {row.original.status == "ACTIVE" ? (
              <MdToggleOn size={22} color="green" />
            ) : (
              <MdToggleOff size={22} color="gray" />
            )}
          </button>

         {company && (
  <BtnDownloadCoblanSummary hiring={row.original} company={company} />
)}
        </div>
      ),
    },
    
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-white">Listado de Contrataciones</h1>
      <p className="text-center mb-4 text-white">
        ✅ En este apartado usted podrá anular contrataciones, y ver un detalle
        general de cada registro
      </p>
      {loading && <FullScreenLoader />}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: "80vw" }}>
          <DataTable columns={columns} data={hirings} />
        </div>
      )}

      <ConfirmModal
        show={statusModalVisible}
        onClose={() => {
          setStatusModalVisible(false);
          sethiringSelected(null);
        }}
        title="¿Desea Anular?"
        message={`¿Estás seguro de que querés Anular la contratacion ?`}
        confirmText="Sí, confirmar"
        onConfirm={() =>
          handleCancel({
            hiringSelected: hiringSelected,
            onSuccess: refetch,
            onClose: () => {
              setStatusModalVisible(false);
              sethiringSelected(null);
            },
          })
        }
      />

      <WorkHoursModal
        show={workHoursModalVisible}
        onClose={() => setWorkHoursModalVisible(false)}
        workHours={workHours}
        hiringId={selectedHiringId}
      />
    </div>
  );
};

export default ListHiringsPage;
