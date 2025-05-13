import React, { useEffect } from "react";
import GenericModal from "../../../Components/Modals/GenericModal";
import useForm from "../../../hooks/useForm";
import validateSalaryPayment from "../validations/validateSalaryPayment";
import { formatDateToDDMMYYYY } from "../../../utils/formatDateToDDMMYYYY";

const EditSalaryModal = ({ show, onClose, salary, onConfirm }) => {
  const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(
    {
      employeeId: salary?.employeeId || "",
      amount: salary?.amount || "",
      paymentDate: salary?.paymentDate || "",
      period: salary?.period || "",
      note: salary?.note || "",
    },
    validateSalaryPayment
  );

  // Resetear el formulario al abrir el modal con nuevos datos
  useEffect(() => {
    if (salary) {
      resetForm();
    }
  }, [salary]);

  return (
    <GenericModal
      show={show}
      onHide={onClose}
      title="Editar Pago de Salario"
      onConfirm={handleSubmit((data) => {
        onConfirm({ ...salary, ...data });
        onClose();
      })}
      confirmText="Guardar"
    >
      <div className="row">
        {/* Lado izquierdo: datos actuales */}
        <div className="col-md-6 border-end">
          <h6>Actual</h6>
          <p>
            <strong>Empleado:</strong> {salary?.employeeFullName}
          </p>
          <p>
            <strong>Monto:</strong> {salary?.amount}
          </p>
          <p>
            <strong>Fecha de Pago:</strong>{" "}
            {formatDateToDDMMYYYY(salary?.paymentDate)}
          </p>
          <p>
            <strong>Periodo:</strong> {salary?.period}
          </p>
          <p>
            <strong>Notas:</strong> {salary?.note}
          </p>
        </div>

        {/* Lado derecho: formulario de edición */}
        <div className="col-md-6">
          <h6>Editar</h6>

          <div className="mb-2">
            <label className="form-label">Monto</label>
            <input
              type="number"
              name="amount"
              className={`form-control ${errors.amount ? "is-invalid" : ""}`}
              value={formData.amount}
              onChange={handleChange}
            />
            {errors.amount && (
              <div className="invalid-feedback">{errors.amount}</div>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label">Fecha de Pago</label>
            <input
              type="date"
              name="paymentDate"
              className={`form-control ${
                errors.paymentDate ? "is-invalid" : ""
              }`}
              value={formData.paymentDate}
              onChange={handleChange}
            />
            {errors.paymentDate && (
              <div className="invalid-feedback">{errors.paymentDate}</div>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label">Periodo</label>
            <input
              type="month"
              name="period"
              className={`form-control ${errors.period ? "is-invalid" : ""}`}
              value={formData.period}
              onChange={handleChange}
            />
            {errors.period && (
              <div className="invalid-feedback">{errors.period}</div>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label">Notas</label>
            <textarea
              name="note"
              className="form-control"
              value={formData.note}
              onChange={handleChange}
              rows={2}
            />
          </div>
        </div>
      </div>
    </GenericModal>
  );
};

export default EditSalaryModal;
