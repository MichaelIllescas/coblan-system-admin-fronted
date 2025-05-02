import React from 'react';
import EmployeeSelect from '../../../Components/Selects/EmployeeSelect';
import useSalaryPaymentForm from '../hooks/useSalaryPaymentForm';

const SalaryPaymentForm = () => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    handleSelectEmployee,
    selectedEmployee
  } = useSalaryPaymentForm();

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-4 shadow-lg border-0 col-lg-6 col-sm-12 m-auto mb-3" >
   

      <EmployeeSelect onSelect={handleSelectEmployee}  value={selectedEmployee} />
      {errors.employeeId && <div className="text-danger">{errors.employeeId}</div>}

      <div className="mb-3">
        <label className="form-label">Monto</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
        />
        {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Fecha de pago</label>
        <input
          type="date"
          name="paymentDate"
          value={formData.paymentDate}
          onChange={handleChange}
          className={`form-control ${errors.paymentDate ? 'is-invalid' : ''}`}
        />
        {errors.paymentDate && <div className="invalid-feedback">{errors.paymentDate}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Periodo (YYYY-MM)</label>
        <input
          type="month"
          name="period"
          value={formData.period}
          onChange={handleChange}
          className={`form-control ${errors.period ? 'is-invalid' : ''}`}
        />
        {errors.period && <div className="invalid-feedback">{errors.period}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Observación</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="form-control"
          rows="3"
        />
      </div>

      <button type="submit" className="btn btn-primary">Registrar pago</button>
    </form>
  );
};

export default SalaryPaymentForm;
