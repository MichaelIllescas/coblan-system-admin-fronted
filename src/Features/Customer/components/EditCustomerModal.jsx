import React from 'react';
import GenericModal from '../../../Components/Modals/GenericModal';
import useForm from '../../../hooks/useForm'; // tu hook personalizado
import validateCustomerForm from '../validation/validateCustomerForm'; // si lo tenés

const EditCustomerModal = ({ show, onClose, customer, onConfirm }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      firstName: customer?.firstName || '',
      lastName: customer?.lastName || '',
      documentNumber: customer?.documentNumber || '',
      phone: customer?.phone || '',
      email: customer?.email || '',
      active: customer?.active ?? true,
    },
    validateCustomerForm // puede ser una función dummy si aún no lo implementaste
  );

  // reset form when modal closes
  React.useEffect(() => {
    if (customer) {
      resetForm();
    }
  }, [customer]);

  return (
    <GenericModal
      show={show}
      onHide={onClose}
      title="Editar Cliente"
      onConfirm={handleSubmit((data) => {
        onConfirm({ ...customer, ...data });
        onClose();
      })}
      confirmText="Guardar"
    >
      <div className="row">
        {/* Lado izquierdo: datos actuales */}
        <div className="col-md-6 border-end">
          <h6>Actual</h6>
          <p><strong>Nombre:</strong> {customer?.firstName}</p>
          <p><strong>Apellido:</strong> {customer?.lastName}</p>
          <p><strong>DNI:</strong> {customer?.documentNumber}</p>
          <p><strong>Teléfono:</strong> {customer?.phone}</p>
          <p><strong>Email:</strong> {customer?.email}</p>
          <p><strong>Estado:</strong> {customer?.active ? 'Activo' : 'Inactivo'}</p>
        </div>

        {/* Lado derecho: formulario */}
        <div className="col-md-6">
          <h6>Nuevo</h6>
          <div className="mb-2">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="firstName"
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              name="lastName"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">DNI</label>
            <input
              type="text"
              name="documentNumber"
              className={`form-control ${errors.documentNumber ? 'is-invalid' : ''}`}
              value={formData.documentNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              name="phone"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="active"
              checked={formData.active}
              onChange={(e) =>
                handleChange({
                  target: { name: 'active', value: e.target.checked },
                })
              }
              id="activeCheckbox"
            />
            <label htmlFor="activeCheckbox" className="form-check-label">
              Cliente activo
            </label>
          </div>
        </div>
      </div>
    </GenericModal>
  );
};

export default EditCustomerModal;
