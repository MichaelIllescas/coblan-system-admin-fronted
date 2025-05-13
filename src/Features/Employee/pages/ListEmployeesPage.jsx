import React, { useState } from "react";
import DataTable from "../../../Components/Tables/DataTable";
import useEmployeesList from "../hook/useEmployeesList";
import useEditModal from "../../../hooks/useEditModal";
import useEmployeeUpdate from "../hook/useEmployeeUpdate";
import useEmployeeStatusToggle from "../hook/useEmployeeStatusToggle";
import EditEmployeeModal from "../components/EditEmployeeModal";
import ConfirmModal from "../../../Components/Modals/ConfirmModal";
import { FaEdit } from "react-icons/fa";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import FullScreenLoader from "../../../Components/Loading/FullScreenLoader";

const ListEmployeesPage = () => {
  const { employees, loading, error, refetch } = useEmployeesList();
  const { selectedItem, modalVisible, openModal, closeModal } = useEditModal();
  const { handleUpdate } = useEmployeeUpdate();
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [employeeToToggle, setEmployeeToToggle] = useState(null);

  const { handleToggleStatus } = useEmployeeStatusToggle(refetch);

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nombre", accessor: "firstName" },
    { Header: "Apellido", accessor: "lastName" },
    { Header: "D.N.I.", accessor: "documentNumber" },
    { Header: "CUIT", accessor: "cuit" },
    { Header: "Teléfono", accessor: "phone" },
    { Header: "Email", accessor: "email" },
    { Header: "Domicilio", accessor: "address" },
    {
      Header: "Estado",
      accessor: "active",
      Cell: ({ value }) => (value ? "Activo" : "Inactivo"),
    },
    {
      Header: "Acciones",
      accessor: "actions",
      disableSortBy: true,
      Cell: ({ row }) => (
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-sm btn-action"
            onClick={() => openModal(row.original)}
          >
            <FaEdit size={20} />
          </button>
          <button
            className="btn btn-sm btn-action"
            onClick={() => {
              setEmployeeToToggle(row.original);
              setStatusModalVisible(true);
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
      <h2 className="text-center mb-4 text-white">Listado de Empleados</h2>

      {loading && <FullScreenLoader/> }
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: "80vw" }}>
          <DataTable columns={columns} data={employees} />
        </div>
      )}

      <EditEmployeeModal
        show={modalVisible}
        onClose={closeModal}
        employee={selectedItem}
        onConfirm={(data) =>
          handleUpdate({
            id: selectedItem.id,
            updatedData: data,
            onSuccess: refetch,
            onClose: closeModal,
          })
        }
      />

      <ConfirmModal
        show={statusModalVisible}
        onClose={() => {
          setStatusModalVisible(false);
          setEmployeeToToggle(null);
        }}
        title="¿Cambiar estado?"
        message={`¿Estás seguro de que querés ${
          employeeToToggle?.active ? "desactivar" : "activar"
        } a ${employeeToToggle?.firstName} ${employeeToToggle?.lastName}?`}
        confirmText="Sí, confirmar"
        onConfirm={() =>
          handleToggleStatus({
            employee: employeeToToggle,
            onSuccess: refetch,
            onClose: () => {
              setStatusModalVisible(false);
              setEmployeeToToggle(null);
            }
          })
        }
      />
    </div>
  );
};

export default ListEmployeesPage;
