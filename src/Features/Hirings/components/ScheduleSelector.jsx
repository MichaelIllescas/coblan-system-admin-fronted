import React, { useEffect, useState } from 'react';

const daysOfWeek = [
  { label: 'Lunes', value: 'MONDAY' },
  { label: 'Martes', value: 'TUESDAY' },
  { label: 'Miércoles', value: 'WEDNESDAY' },
  { label: 'Jueves', value: 'THURSDAY' },
  { label: 'Viernes', value: 'FRIDAY' },
  { label: 'Sábado', value: 'SATURDAY' },
  { label: 'Domingo', value: 'SUNDAY' },
];

const ScheduleSelector = ({ onChange, value = [] }) => {
  const [entries, setEntries] = useState(value.length > 0 ? value : [{ day: '', hour: '' }]);

  // Cuando se actualiza desde el hook, reseteamos visualmente
  useEffect(() => {
    setEntries(value.length > 0 ? value : [{ day: '', hour: '' }]);
  }, [value]);

  const handleChange = (index, field, fieldValue) => {
    const updated = [...entries];
    updated[index][field] = fieldValue;
    setEntries(updated);
    onChange(updated);
  };

  const addEntry = () => {
    const updated = [...entries, { day: '', hour: '' }];
    setEntries(updated);
    onChange(updated);
  };

  const removeEntry = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    onChange(updated);
  };

  return (
    <div>
      <h6>Días y horarios</h6>
      {entries.map((entry, index) => (
        <div className="row mb-2" key={index}>
          <div className="col-md-5">
            <select
              className="form-control"
              value={entry.day}
              onChange={(e) => handleChange(index, 'day', e.target.value)}
            >
              <option value="">Seleccionar día</option>
              {daysOfWeek.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>
          <div className="col-md-5">
            <input
              type="time"
              className="form-control"
              value={entry.hour.replace(':00', '')}
              onChange={(e) => handleChange(index, 'hour', e.target.value + ':00')}
            />
          </div>
          <div className="col-md-2">
            {index > 0 && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeEntry(index)}
              >
                Quitar
              </button>
            )}
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={addEntry}>
        Agregar otro
      </button>
    </div>
  );
};

export default ScheduleSelector;
