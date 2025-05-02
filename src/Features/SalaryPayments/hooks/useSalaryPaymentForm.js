import { useCallback } from 'react';
import useForm from '../../../hooks/useForm';
import validateSalaryPayment from '../validations/validateSalaryPayment';
import salaryPaymentService from '../services/salaryPaymentService.js';
import { showErrorAlert, showSuccessAlert } from '../../../Components/Alerts/alerts.js';

const useSalaryPaymentForm = () => {
  const initialValues = {
    employeeId: '',
    amount: '',
    paymentDate: '',
    period: '',
    note: ''
  };

  const {
    formData,
    errors,
    handleChange,
    handleSubmit: baseHandleSubmit,
    resetForm
  } = useForm(initialValues, validateSalaryPayment);

  const handleSelectEmployee = useCallback((id) => {
    handleChange({ target: { name: 'employeeId', value: id } });
  }, [handleChange]);

  const handleSubmit = baseHandleSubmit(async (formData) => {
    try {
      await salaryPaymentService.createSalaryPayment(formData);
      showSuccessAlert("Exito", "Pago de Salario registrado exitosamente")
      resetForm();
    } catch (error) {
      showErrorAlert("Error", error.response.data.error || "error al registrar el pago del salario");
    }
  });

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    handleSelectEmployee
  };
};

export default useSalaryPaymentForm;
