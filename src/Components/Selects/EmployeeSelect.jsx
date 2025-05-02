import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchEmployees } from './employeeService';

const EmployeeSelect = ({ onSelect }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); 

  useEffect(() => {
    fetchEmployees().then(data => {
      const formattedOptions = data.map(emp => ({
        value: emp.id,
        label: `${emp.firstName} ${emp.lastName}`,
      }));
      setOptions(formattedOptions);
    });
  }, []);

  const handleChange = (option) => {
    setSelectedOption(option); 
    onSelect(option ? option.value : null);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Empleado</label>
      <Select
        options={options}
        value={selectedOption} 
        onChange={handleChange}
        placeholder="Seleccione un empleado"
        isClearable
      />
    </div>
  );
};

export default EmployeeSelect;
