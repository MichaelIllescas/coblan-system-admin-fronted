import React from "react";
import DataTable from "../../../Components/Tables/DataTable";
import useCustomerList from "../hooks/useCustomerList";
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import EditCustomerModal from "../components/EditCustomerModal";
import useEditModal from "../../../hooks/useEditModal";
import useCustomerUpdate from "../hooks/useCustomerUpdate";
import ConfirmDeleteModal from "../../../Components/Modals/ConfirmDeleteModal";
import { useState } from "react";
import useConfirmCustomerDelete from "../hooks/useConfirmCustomerDelete";

const ListCustomersPage = () => {
  const { customers, loading, error, refetch } = useCustomerList();
  const { selectedItem, modalVisible, openModal, closeModal } = useEditModal();
  // eslint-disable-next-line no-unused-vars
  const { handleUpdate, loading: updating } = useCustomerUpdate();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const { confirmDelete } = useConfirmCustomerDelete(refetch, () => {
    setDeleteModalVisible(false);
    setCustomerToDelete(null);
  });

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nombre", accessor: "firstName" },
    { Header: "Apellido", accessor: "lastName" },
    { Header: "D.N.I.", accessor: "documentNumber" },
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
              setCustomerToDelete(row.original);
              setDeleteModalVisible(true);
            }}
          >
            <MdDelete size={20} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-white">Listado de Clientes</h2>

      {loading && <p className="text-white text-center">Cargando...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: "80vw" }}>
          <DataTable columns={columns} data={customers} />
        </div>
      )}

      <EditCustomerModal
        show={modalVisible}
        onClose={closeModal}
        customer={selectedItem}
        onConfirm={(data) =>
          handleUpdate({
            id: selectedItem.id,
            updatedData: data,
            onSuccess: refetch,
            onClose: closeModal,
          })
        }
      />

      <ConfirmDeleteModal
        show={deleteModalVisible}
        onClose={() => {
          setDeleteModalVisible(false);
          setCustomerToDelete(null);
        }}
        title="¿Eliminar cliente?"
        message={`¿Estás seguro de que querés eliminar a ${customerToDelete?.firstName} ${customerToDelete?.lastName}?`}
        confirmText="Sí, eliminar"
        onConfirm={() => confirmDelete(customerToDelete)}
      />
    </div>
  );
};

export default ListCustomersPage;
