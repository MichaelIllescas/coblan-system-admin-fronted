import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchServices } from './servicesService';

const ServiceSelect = ({ onSelect, value }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchServices().then(data => {
      const formattedOptions = data.map(service => ({
        value: service.id,
        label: `${service.name} ${service.monthlyHours} Horas`,
        raw: service
      }));
      setOptions(formattedOptions);
    });
  }, []);

  const handleChange = (option) => {
    onSelect(option);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Servicio</label>
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Seleccione un servicio"
        isClearable
      />
    </div>
  );
};

export default ServiceSelect;
