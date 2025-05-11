import React from "react";
import DataTable from "../../../Components/Tables/DataTable";
import useSalaryList from "../hooks/useSalarysList";
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { useState } from "react";
import useEditModal from "../../../hooks/useEditModal";
import useConfirmSalaryDelete from "../hooks/useConfirmSalaryDelete";
import ConfirmDeleteModal from "../../../Components/Modals/ConfirmDeleteModal";
import EditSalaryModal from "../components/EditSalaryModal";
import useSalaryUpdate from "../hooks/useSalaryUpdate";
import { formatDateToDDMMYYYY } from "../../../utils/formatDateToDDMMYYYY";

const ListSalaryPage = () => {
  const { handleUpdate } = useSalaryUpdate();
  const { salarysPayemnts, loading, error, refetch } = useSalaryList();

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [salaryToDelete, setSalaryToDelete] = useState(null);
  const { confirmDelete } = useConfirmSalaryDelete(refetch, () => {
    setDeleteModalVisible(false);
    setSalaryToDelete(null);
  });

  const { selectedItem, modalVisible, openModal, closeModal } = useEditModal();

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Empleado", accessor: "employeeFullName" },
    { Header: "Salario", accessor: "amount" },
    {
      Header: "Fecha de Pago",
      accessor: "paymentDate",
      Cell: ({ value }) => formatDateToDDMMYYYY(value),
    },
    { Header: "Periodo", accessor: "period" },
    { Header: "Notas", accessor: "note" },

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
              setSalaryToDelete(row.original);
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
      <h2 className="text-center mb-4 text-white">
        Listado de Salarios abonados{" "}
      </h2>

      {loading && <p className="text-white text-center">Cargando...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: "80vw" }}>
          <DataTable columns={columns} data={salarysPayemnts} />
        </div>
      )}

      <EditSalaryModal
        show={modalVisible}
        onClose={closeModal}
        salary={selectedItem}
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
          setSalaryToDelete(null);
        }}
        title="¿Eliminar cliente?"
        message={`¿Estás seguro de que querés eliminar el pago de salario a ${salaryToDelete?.employeeFullName} `}
        confirmText="Sí, eliminar"
        onConfirm={() => confirmDelete(salaryToDelete)}
      />
    </div>
  );
};

export default ListSalaryPage;
