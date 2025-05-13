import { useState } from 'react';

function useMonthlyFilter(onChange) {
  const [filter, setFilter] = useState({ month: null, year: null });

  const applyFilter = ({ month, year }) => {
    setFilter({ month, year });
    if (onChange) {
      onChange({ month, year }); // Aquí podrías disparar una petición al backend si lo deseas.
    }
  };

  return {
    filter,
    applyFilter,
  };
}

export default useMonthlyFilter;
