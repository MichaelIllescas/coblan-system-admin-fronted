import { useCallback, useState } from 'react';
import useForm from '../../../hooks/useForm';
import validateSalaryPayment from '../validations/validateSalaryPayment';
import salaryPaymentService from '../services/salaryPaymentService';
import { showErrorAlert, showSuccessAlert } from '../../../Components/Alerts/alerts';

const useSalaryPaymentForm = () => {
  const initialValues = {
    amount: '',
    paymentDate: '',
    period: '',
    note: ''
  };

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const {
    formData,
    errors,
    handleChange,
    handleSubmit: baseHandleSubmit,
    resetForm: baseResetForm
  } = useForm(initialValues, (values) =>
    validateSalaryPayment({ ...values, employeeId: selectedEmployee?.value })
  );

  const handleSelectEmployee = useCallback((option) => {
    setSelectedEmployee(option);
  }, []);

  const handleSubmit = baseHandleSubmit(async (formData) => {
    const payload = {
      ...formData,
      employeeId: selectedEmployee?.value
    };

    try {
      await salaryPaymentService.createSalaryPayment(payload);
      showSuccessAlert("Éxito", "Pago de salario registrado exitosamente");

      // 🔁 Limpiar campos
      baseResetForm();
      setSelectedEmployee(null);
    } catch (error) {
      const message = error?.response?.data?.error || "Error al registrar el pago del salario";
      showErrorAlert("Error", message);
    }
  });

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm: () => {
      baseResetForm();
      setSelectedEmployee(null);
    },
    handleSelectEmployee,
    selectedEmployee
  };
};

export default useSalaryPaymentForm;
