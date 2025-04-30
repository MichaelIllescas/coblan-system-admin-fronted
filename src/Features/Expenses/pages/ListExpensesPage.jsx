import React from 'react';
import DataTable from '../../../Components/Tables/DataTable';
import useExpensesList from '../hooks/useExpensesList';
import { FaEdit } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';


const ListExpensesPage = () => {
  const { expenses, loading, error } = useExpensesList();

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
            className="btn btn-sm btn-warning"
            onClick={() => alert(`Editar cliente ID: ${row.original.id}`)}
          >
           <FaEdit  size={20}/>

          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => alert(`Eliminar cliente ID: ${row.original.id}`)}
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
    </div>
  );
};

export default ListExpensesPage;
