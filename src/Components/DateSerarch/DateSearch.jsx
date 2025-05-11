import React, { useState } from 'react';

const DateSearch = ({ onSearch, children }) => {
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (date) onSearch(date);
  };

  return (
    <div className="card p-4 shadow-sm">
      <p>Buscar por fecha</p>
      <div className="d-flex gap-2 mb-3 align-items-end">
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>Buscar</button>
      </div>
      {children}
    </div>
  );
};

export default DateSearch;
