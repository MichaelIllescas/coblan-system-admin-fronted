import { useState } from 'react';
import validateHiringForm from '../validations/validateHiringForm';
import hiringService from '../services/hiringService';
import { showErrorAlert, showSuccessAlert } from '../../../Components/Alerts/alerts';


export default function useHiringForm() {
  const [startDate, setStartDate] = useState('');
  const [employee, setEmployee] = useState(null);
  const [service, setService] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setloading] = useState(false);

  const handleSubmit = async () => {
    const validationErrors = validateHiringForm({ startDate, employee, service, customer, schedule });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      startDate,
      employeeId: employee.value,
      serviceId: service.value,
      customerId: customer.value,
      schedule,
    };

    try {
      setloading(true);
      await hiringService.createHiring(payload);
      showSuccessAlert('Éxito', 'Contratacion registrada correctamente');
      setStartDate('');
    setEmployee(null);
    setService(null);
    setCustomer(null);
    setSchedule([]);
    setErrors({});
      // podés resetear el formulario si querés
    } catch (error) {
      showErrorAlert(error.response?.data?.error || 'Ocurrió un error')
      
    } finally{
      setloading(false);
    }
  };

  return {
    startDate,
    employee,
    service,
    customer,
    schedule,
    errors,
    loading,
    setStartDate,
    setEmployee,
    setService,
    setCustomer,
    setSchedule,
    handleSubmit,
  };
}
