import React from 'react';
import DataTable from '../../../Components/Tables/DataTable';
import useUsersList from '../hooks/useUsersList';
import { FaEdit } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import { col } from 'framer-motion/client';


const ListUsersPage = () => {
  const { users, loading, error } = useUsersList();

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'firstName' },
    { Header: 'Apellido', accessor: 'lastName' },
    { Header: 'D.N.I.', accessor: 'documentNumber' },
    { Header: 'Celular', accessor: 'phone' },
    { Header: 'Domicilio', accessor: 'address' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Estado', accessor: 'enabled' , Cell: ({ value }) => (value ? 'Activo' : 'Inactivo'),},
    { Header: 'Rol', accessor: 'role' },
    { Header: 'Fecha de Registro', accessor: 'registrationDate' },


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
      <h2 className="text-center mb-4 text-white">Listado de Usuarios</h2>

      {loading && <p className="text-white text-center">Cargando...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <div className="m-auto table-responsive" style={{ maxWidth: '70vw' }}>
          <DataTable columns={columns} data={users} />
        </div>
      )}
    </div>
  );
};

export default ListUsersPage;
