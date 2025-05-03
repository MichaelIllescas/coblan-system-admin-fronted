import React, { useState } from "react";
import EmployeeSelect from "../../../Components/Selects/EmployeeSelect";
import MonthYearSearch from "../../../Components/DateSerarch/MonthYearSearch";
import DataTable from "../../../Components/Tables/DataTable";
import useAssignedHoursByEmployee from "../hooks/useAssignedHoursByEmployee";

const AssignedHoursPage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [data, setData] = useState([]);

  const { fetchAssignedHours } = useAssignedHoursByEmployee();

  const handleEmployeeChange = (option) => {
    setSelectedEmployee(option);
    setData([]);
  };

  const handleSearch = (month, year) => {
    if (selectedEmployee) {
      setSelectedMonth(month);
      setSelectedYear(year);
      fetchAssignedHours(selectedEmployee.value, month, year, setData);
    }
  };

  const confirmedHours = data.filter((h) => h.status === "CONFIRMED");
  const pendingHours = data.filter((h) => h.status === "PENDING");
  const cancelledHours = data.filter((h) => h.status === "CANCELLED");

  const totalConfirmedAmount = confirmedHours.reduce(
    (sum, h) => sum + (h.price || 0),
    0
  );

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Fecha", accessor: "date" },
    { Header: "Cliente", accessor: "customerName" },
    { Header: "Empleado", accessor: "employeeName" },
    {
      Header: "Fecha de realización",
      accessor: "confirmationDate",
      Cell: ({ value }) => (value == null ? "---" : value),
    },
    {
      Header: "Hora de realización",
      accessor: "confirmationHour",
      Cell: ({ value }) => (value == null ? "---" : value),
    },
    {
      Header: "Precio",
      accessor: "price",
      Cell: ({ value }) => `$${value}`,
    },
    { Header: "Tipo", accessor: "type" },
    {
      Header: "Estado",
      accessor: "status",
      Cell: ({ value }) => {
        if (value === "CONFIRMED") return "Confirmada";
        if (value === "CANCELLED") return "Cancelada";
        if (value === "PENDING") return "Pendiente";
        return value;
      },
    },
  ];

  return (
    <div className="container mt-1">
      <h1 className="mb-4 text-white">Horas asignadas por empleado</h1>

      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <EmployeeSelect
            value={selectedEmployee}
            onSelect={handleEmployeeChange}
          />
        </div>
        <div className="col-md-6">
          <MonthYearSearch onSearch={handleSearch} />
        </div>
      </div>

      {data.length > 0 && (
        <>
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="alert alert-success mb-2">
                Confirmadas: <strong>{confirmedHours.length}</strong>
              </div>
            </div>
            <div className="col-md-3">
              <div className="alert alert-warning mb-2">
                Pendientes: <strong>{pendingHours.length}</strong>
              </div>
            </div>
            <div className="col-md-3">
              <div className="alert alert-danger mb-2">
                Canceladas: <strong>{cancelledHours.length}</strong>
              </div>
            </div>
            <div className="col-md-3">
              <div className="alert alert-primary mb-2">
                Total ganado: <strong>${totalConfirmedAmount}</strong>
              </div>
            </div>
          </div>
        </>
      )}

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AssignedHoursPage;
