import React, { useState } from 'react';
import DataTable from '../../../Components/Tables/DataTable';
import useExpensesList from '../hooks/useExpensesList';
import { FaEdit } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import ConfirmDeleteModal from '../../../Components/Modals/ConfirmDeleteModal';
import useConfirmExpenseDelete from '../../Expenses/hooks/useConfirmExpenseDelete';
import useExpenseUpdate from '../hooks/useExpenseUpdate';
import useEditModal from '../../../hooks/useEditModal';
import EditExpenseModal from '../components/EditExpenseModal';

const ListExpensesPage = () => {
  const { expenses, loading, error , refetch} = useExpensesList();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const { confirmDelete } = useConfirmExpenseDelete(refetch, () => {
    setDeleteModalVisible(false);
    setCustomerToDelete(null);
  });
  const { handleUpdate, loading: updating } = useExpenseUpdate();
  const { selectedItem, modalVisible, openModal, closeModal } = useEditModal();

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Descripción', accessor: 'description' },
    { Header: 'Monto', accessor: 'amount' },
    { Header: 'Fecha', accessor: 'date' },
    { Header: 'Nota', accessor: 'notes' },
 

    {
      Header: 'Acciones',
      accessor: 'actions',
      disableSortBy: true,
      Cell: ({ row }) => (
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-sm btn-action"
            onClick={() => openModal(row.original)}
          >
           <FaEdit  size={20}/>

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
      <h2 className="text-center mb-4 text-white">Listado de Gastos</h2>

      {loading && <p className="text-white text-center">Cargando...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: '70vw' }}>
          <DataTable columns={columns} data={expenses} />
        </div>
      )}

<EditExpenseModal
        show={modalVisible}
        onClose={closeModal}
        expense={selectedItem}
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

export default ListExpensesPage;
