import React, { useState } from 'react';

const DateFilter = ({ onFilter }) => {
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(currentYear);

  const handleFilterClick = () => {
    if (month && year) {
      onFilter({ month, year });
    }
  };

  return (
    <div className="d-flex gap-2 align-items-end mb-3">
      <div>
        <label>Mes</label>
        <select className="form-select" value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">Seleccionar</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString('es-AR', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Año</label>
        <input
          type="number"
          className="form-control"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          min="2000"
          max={currentYear + 1}
        />
      </div>

      <button className="btn btn-primary" onClick={handleFilterClick}>
        Filtrar
      </button>
    </div>
  );
};

export default DateFilter;
