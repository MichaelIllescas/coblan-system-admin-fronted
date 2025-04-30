import { useState } from 'react';
import { updateEmployee } from '../services/updateEmployeeService';
import { showSuccessAlert, showErrorAlert } from '../../../Components/Alerts/alerts';

const useEmployeeStatusToggle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleToggleStatus = async ({ employee, onSuccess, onClose }) => {
    if (!employee) return;

    setLoading(true);
    setError(null);

    const updatedData = {
      ...employee,
      active: !employee.active,
    };

    try {
      await updateEmployee(employee.id, updatedData);

      if (onSuccess) await onSuccess();
      if (onClose) onClose();

      showSuccessAlert(
        'Estado actualizado',
        `El empleado ${employee.firstName} ${employee.lastName} fue ${updatedData.active ? 'activado' : 'desactivado'} correctamente.`
      );
    } catch (err) {
      console.error('Error al cambiar estado del empleado', err);
      showErrorAlert(
        'Error',
        err.response?.data?.error || 'No se pudo cambiar el estado del empleado'
      );
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleToggleStatus, loading, error };
};

export default useEmployeeStatusToggle;
