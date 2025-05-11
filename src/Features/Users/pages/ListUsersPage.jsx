import React, { useState } from "react";
import DataTable from "../../../Components/Tables/DataTable";
import useUsersList from "../hooks/useUsersList";
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdDelete, MdToggleOn, MdToggleOff } from "react-icons/md";
import ConfirmModal from "../../../Components/Modals/ConfirmModal";
import useUserStatusToggle from "../hooks/useUserToggleStatus";
import useEditModal from "../../../hooks/useEditModal";
import useUserUpdate from "../hooks/useUserUpdate";
import EditEmployeeModal from "../../Employee/components/EditEmployeeModal";
import EditUserModal from "../components/EditUserModal";
import { formatDateToDDMMYYYY } from "../../../utils/formatDateToDDMMYYYY";

const ListUsersPage = () => {
  const { users, loading, error, refetch } = useUsersList();
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [userToToggle, setUserToToggle] = useState(null);
  const { selectedItem, modalVisible, openModal, closeModal } = useEditModal();
  const { handleUpdate } = useUserUpdate();
  const { handleToggleStatus } = useUserStatusToggle(refetch);

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nombre", accessor: "firstName" },
    { Header: "Apellido", accessor: "lastName" },
    { Header: "D.N.I.", accessor: "documentNumber" },
    { Header: "Celular", accessor: "phone" },
    { Header: "Domicilio", accessor: "address" },
    { Header: "Email", accessor: "email" },
    {
      Header: "Estado",
      accessor: "enabled",
      Cell: ({ value }) => (value ? "Activo" : "Inactivo"),
    },
    { Header: "Rol", accessor: "role" },
    {
      Header: "Fecha de Registro",
      accessor: "registrationDate",
      Cell: ({ value }) => formatDateToDDMMYYYY(value),
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
              setUserToToggle(row.original);
              setStatusModalVisible(true);
            }}
          >
            {row.original.enabled ? (
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
    <div className="container mt-2">
      <h2 className="text-center mb-4 text-white">Listado de Usuarios</h2>

      {loading && <p className="text-white text-center">Cargando...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: "80vw" }}>
          <DataTable columns={columns} data={users} />
        </div>
      )}
      <EditUserModal
        show={modalVisible}
        onClose={closeModal}
        user={selectedItem}
        onConfirm={(data) =>
          handleUpdate({
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
          setUserToToggle(null);
        }}
        title="¿Cambiar estado?"
        message={`¿Estás seguro de que querés ${
          userToToggle?.enabled ? "desactivar" : "activar"
        } a ${userToToggle?.firstName} ${userToToggle?.lastName}?`}
        confirmText="Sí, confirmar"
        onConfirm={() =>
          handleToggleStatus({
            user: userToToggle,
            onSuccess: refetch,
            onClose: () => {
              setStatusModalVisible(false);
              setUserToToggle(null);
            },
          })
        }
      />
    </div>
  );
};

export default ListUsersPage;
