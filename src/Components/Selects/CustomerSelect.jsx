import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchCustomer } from './customerService';

const CustomerSelect = ({ onSelect, value }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchCustomer().then(data => {
      const formattedOptions = data.map(customer => ({
        value: customer.id,
        label: `${customer.firstName} ${customer.lastName}`,
        raw: customer
      }));
      setOptions(formattedOptions);
    });
  }, []);

  const handleChange = (option) => {
    onSelect(option);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Cliente</label>
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Seleccione un cliente"
        isClearable
      />
    </div>
  );
};

export default CustomerSelect;
