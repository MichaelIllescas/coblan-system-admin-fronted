import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchEmployees } from './employeeService';

const EmployeeSelect = ({ onSelect, value }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchEmployees().then(data => {
      const formattedOptions = data.map(emp => ({
        value: emp.id,
        label: `${emp.firstName} ${emp.lastName}`,
        raw: emp
      }));
      setOptions(formattedOptions);
    });
  }, []);

  const handleChange = (option) => {
    onSelect(option);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Empleado</label>
      <Select
        options={options}
        value={value} // 👈 Esto lo controla desde el hook
        onChange={handleChange}
        placeholder="Seleccione un empleado"
        isClearable
      />
    </div>
  );
};


export default EmployeeSelect;
