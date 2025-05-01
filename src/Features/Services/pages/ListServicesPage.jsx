import React, { useState } from "react";
import DataTable from "../../../Components/Tables/DataTable";
import useServicesList from "../hooks/useServicesList";
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import useConfirmServiceDelete from "../../Services/hooks/useConfirmServiceDelete";
import ConfirmDeleteModal from "../../../Components/Modals/ConfirmDeleteModal";
import useEditModal from "../../../hooks/useEditModal";
import useServiceUpdate from "../hooks/useServiceUpdate";
import EditServiceModal from "../components/EditServiceModal";

const ListServicesPage = () => {
  const { services, loading, error, refetch } = useServicesList();
  const { selectedItem, modalVisible, openModal, closeModal } = useEditModal();
  const { handleUpdate, loading: updating } = useServiceUpdate();

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  const { confirmDelete } = useConfirmServiceDelete(refetch, () => {
    setDeleteModalVisible(false);
    setServiceToDelete(null);
  });

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nombre", accessor: "name" },
    { Header: "Cant. Horas", accessor: "monthlyHours" },
    { Header: "Monto", accessor: "totalAmount" },
    { Header: "Nota", accessor: "note" },
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
              setServiceToDelete(row.original);
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
      <h2 className="text-center mb-4 text-white">Listado de Servicios</h2>

      {loading && <p className="text-white text-center">Cargando...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: "70vw" }}>
          <DataTable columns={columns} data={services} />
        </div>
      )}

      <EditServiceModal
        show={modalVisible}
        onClose={closeModal}
        service={selectedItem}
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
          setServiceToDelete(null);
        }}
        title="¿Eliminar cliente?"
        message={`¿Estás seguro de que querés eliminar a ${serviceToDelete?.name}?`}
        confirmText="Sí, eliminar"
        onConfirm={() => confirmDelete(serviceToDelete)}
      />
    </div>
  );
};

export default ListServicesPage;
