import React from 'react';
import GenericModal from '../../../Components/Modals/GenericModal';
import useForm from '../../../hooks/useForm';
import validateEmployeeForm from '../validations/validateEmployeeForm';

const EditEmployeeModal = ({ show, onClose, employee, onConfirm }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      firstName: employee?.firstName || '',
      lastName: employee?.lastName || '',
      documentNumber: employee?.documentNumber || '',
      phone: employee?.phone || '',
      email: employee?.email || '',
      cuit: employee?.cuit || '',
      address: employee?.address || '',
      active: employee?.active ?? true,
    },
    validateEmployeeForm
  );

  React.useEffect(() => {
    if (employee) {
      resetForm();
    }
  }, [employee]);

  return (
    <GenericModal
      show={show}
      onHide={onClose}
      title="Editar Empleado"
      onConfirm={handleSubmit((data) => {
        onConfirm({ ...employee, ...data });
        onClose();
      })}
      confirmText="Guardar"
    >
      <div className="row">
        <div className="col-md-6 border-end">
          <h6>Actual</h6>
          <p><strong>Nombre:</strong> {employee?.firstName}</p>
          <p><strong>Apellido:</strong> {employee?.lastName}</p>
          <p><strong>DNI:</strong> {employee?.documentNumber}</p>
          <p><strong>Teléfono:</strong> {employee?.phone}</p>
          <p><strong>Email:</strong> {employee?.email}</p>
          <p><strong>CUIT:</strong> {employee?.cuit}</p>
          <p><strong>Dirección:</strong> {employee?.address}</p>
          <p><strong>Estado:</strong> {employee?.active ? 'Activo' : 'Inactivo'}</p>
        </div>

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

          <div className="mb-2">
            <label className="form-label">CUIT</label>
            <input
              type="text"
              name="cuit"
              className={`form-control ${errors.cuit ? 'is-invalid' : ''}`}
              value={formData.cuit}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              name="address"
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
              value={formData.address}
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
              Empleado activo
            </label>
          </div>
        </div>
      </div>
    </GenericModal>
  );
};

export default EditEmployeeModal;
