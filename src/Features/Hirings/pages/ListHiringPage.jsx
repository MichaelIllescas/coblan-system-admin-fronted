import DataTable from "../../../Components/Tables/DataTable";
import useHiringList from "../hooks/useHiringList";
import ConfirmModal from "../../../Components/Modals/ConfirmModal";
import { FaEdit, FaEye  } from "react-icons/fa";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { useState } from "react";
import useCancelHiring from "../hooks/useCancelHiring";
import WorkHoursModal from '../components/WorkHoursModal'
import useHiringWorkHours from "../hooks/useHiringWorkHours";

const ListHiringsPage = () => {
  const { hirings, loading, error , refetch} = useHiringList();
  const [workHoursModalVisible, setWorkHoursModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [hiringSelected, sethiringSelected] = useState(null);
  const { handleCancel} = useCancelHiring();
  const {workHours, fetchWorkHours} = useHiringWorkHours();
  const [selectedHiringId, setSelectedHiringId] = useState(null);

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
    
    { Header: "Cliente", accessor: "customerName" },
    {Header: "Domicilio", accessor: "customerAddress"},
    { Header: "Servicio", accessor: "serviceName" },
    { Header: "Empleado", accessor: "employeeName" },
    { Header: "Valor", accessor: "totalAmount" },
    {
        Header: "Cronograma",
        accessor: "schedule",
        Cell: ({ value }) => <span>{formatSchedule(value)}</span>
      },
      {
        Header: "Estado",
        accessor: "status",
        Cell: ({ value }) => {
          if (value === 'ACTIVE') return 'Activa';
          if (value === 'CANCELLED') return 'Cancelada';
          return value; 
        
      }
     } ,
    
    {
      Header: "Acciones",
      accessor: "actions",
      disableSortBy: true,
      Cell: ({ row }) => (
        <div className="d-flex justify-content-center gap-2">
          <button
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
            className="btn btn-sm btn-action"
            onClick={() => {
              if(row.original.status == 'CANCELLED') return;
              sethiringSelected(row.original);
              setStatusModalVisible(true);
            }}
          >
            {row.original.status == 'ACTIVE' ? (
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
            }
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
