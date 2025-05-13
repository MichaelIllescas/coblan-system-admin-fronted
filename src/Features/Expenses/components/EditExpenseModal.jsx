import React from 'react';
import GenericModal from '../../../Components/Modals/GenericModal';
import useForm from '../../../hooks/useForm';
import validateExpenseForm from '../validations/validateExpenseForm'; 
import {formatDateToDDMMYYYY} from '../../../utils/formatDateToDDMMYYYY';
const EditExpenseModal = ({ show, onClose, expense, onConfirm }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      name: expense?.name || '',
      description: expense?.description || '',
      amount: expense?.amount || '',
      date: expense?.date || '',
      notes: expense?.notes || '',

    },
    validateExpenseForm 
  );

  // reset form when modal closes
  React.useEffect(() => {
    if (expense) {
      resetForm();
    }
  }, [expense]);

  return (
    <GenericModal
      show={show}
      onHide={onClose}
      title="Editar Gasto"
      onConfirm={handleSubmit((data) => {
        onConfirm({ ...expense, ...data });
        onClose();
      })}
      confirmText="Guardar"
    >
      <div className="row">
        {/* Lado izquierdo: datos actuales */}
        <div className="col-md-6 border-end">
          <h6>Actual</h6>
          <p><strong>Nombre:</strong> {expense?.name}</p>
          <p><strong>Descripción:</strong> {expense?.description}</p>
          <p><strong>Monto: $</strong> {expense?.amount}</p>
          <p><strong>Fecha:</strong> {formatDateToDDMMYYYY(expense?.date)}</p>
          <p><strong>Notas:</strong> {expense?.notes}</p>
       
        </div>

        {/* Lado derecho: formulario */}
        <div className="col-md-6">
          <h6>Nuevo</h6>
          <div className="mb-2">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="name"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
                      <label className="form-label">Descripción</label>
                      <input
                        type="text"
                        name="description"
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        value={formData.description}
                        onChange={handleChange}
                      />
             </div>


          <div className="mb-2">
            <label className="form-label">Monto</label>
            <input
              type="number"
              name="amount"
              className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Fecha</label>
            <input
              type="date"
              name="date"
              className={`form-control ${errors.date ? 'is-invalid' : ''}`}
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Notas</label>
            <input
              type="text"
              name="notes"
              className={`form-control ${errors.notes ? 'is-invalid' : ''}`}
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
         
        </div>
      </div>
    </GenericModal>
  );
};

export default EditExpenseModal;
