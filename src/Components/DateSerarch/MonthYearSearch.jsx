import React, { useState } from 'react';

const MonthYearSearch = ({ onSearch, children }) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = () => {
    if (month && year) onSearch(month, year);
  };

  return (
    <div className="card p-4 shadow-sm">
      <h5>Buscar por mes y año</h5>
      <div className="d-flex gap-2 mb-3 align-items-end">
        <select className="form-select" value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">Mes</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="form-control"
          placeholder="Año"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
      </div>
      {children}
    </div>
  );
};

export default MonthYearSearch;
