import { useState, useEffect } from 'react';
import validateConfirmHourForm from '../validations/validateConfirmHourForm';

const useConfirmHourForm = (initialHour) => {
  const [form, setForm] = useState({
    newDate: '',
    newHour: '',
    newEmployeeId: null,
    observation: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialHour) {
      setForm({
        newDate: initialHour.date || '',
        newHour: '',
        newEmployeeId: initialHour.employeeId || null,
        observation: ''
      });
      setErrors({});
    }
  }, [initialHour]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEmployeeChange = (selectedOption) => {
    setForm((prev) => ({
      ...prev,
      newEmployeeId: selectedOption ? selectedOption.value : null
    }));
  };

  const validate = () => {
    const validationErrors = validateConfirmHourForm(form);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    form,
    errors,
    handleChange,
    handleEmployeeChange,
    validate
  };
};

export default useConfirmHourForm;
