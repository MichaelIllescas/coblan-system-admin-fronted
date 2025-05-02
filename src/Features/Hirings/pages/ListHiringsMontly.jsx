import React from 'react';
import useListMonthlyHirings from '../hooks/useListMonthlyHirings';
import DataTable from '../../../Components/Tables/DataTable';
import DateFilter from '../../../Components/DataFilter/DateFilter';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ListHiringsMonthly = () => {
  const { hirings, loading, fetchHirings } = useListMonthlyHirings();
  const navigate = useNavigate();

  const columns = [
    { Header: 'ID', accessor: 'hiringId' },
    { Header: 'Cliente', accessor: 'customerName' },
    { Header: 'Servicio', accessor: 'serviceName' },
    { Header: 'Empleado', accessor: 'employeeName' },
    { Header: 'Monto Total', accessor: 'servicePriceAtHiring' },
    {
        Header: "Estado",
        accessor: "status",
        Cell: ({ value }) => {
          switch (value) {
            case "ACTIVE":
              return "ACTIVA";
            case "CANCELLED":
              return "CANCELADA";
            case "CONFIRMED":
              return "CONFIRMADA";
            default:
              return value;
          }
        }
      },

    {
      Header: 'Acciones',
      accessor: 'actions',
      Cell: ({ row }) => (
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => handleViewWorkHours(row.original.hiringId)}

        >
          <FaEye /> Ver horas
        </button>
      ),
    },
  ];

  const handleFilter = ({ month, year }) => {
    fetchHirings({ month, year });
  };

  const handleViewWorkHours = (hiringId) => {
    navigate(`/hirings/${hiringId}/hours`);
  };

  return (
    <div className="container">
      <h2>Contrataciones mensuales</h2>
      <DateFilter onFilter={handleFilter} />
      {loading ? (
        <p>Cargando contrataciones...</p>
      ) : (
        <DataTable columns={columns} data={hirings} />
      )}
    </div>
  );
};

export default ListHiringsMonthly;
