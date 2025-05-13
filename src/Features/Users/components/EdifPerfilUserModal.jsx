import React from 'react';
import GenericModal from '../../../Components/Modals/GenericModal';
import useForm from '../../../hooks/useForm';
import validateUpdateForm from '../validations/validateUpdateForm';

const EditPerfilUserModal = ({ show, onClose, user, onConfirm }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      id: user?.id || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      documentNumber: user?.documentNumber || '',
      phone: user?.phone || '',
      email: user?.email || '',
      address: user?.address || '',
      role: user?.role || '',
      active: user?.enabled ?? true,
      registrationDate: user?.registrationDate ?? new Date().toISOString().split('T')[0]
    },
    validateUpdateForm
  );

  React.useEffect(() => {
    if (user) {
      resetForm();
    }
  }, [user]);

  return (
    <GenericModal
      show={show}
      onHide={onClose}
      title="Editar Perfil"
      onConfirm={handleSubmit((data) => {
        onConfirm({ ...user, ...data });
        onClose();
      })}
      confirmText="Guardar"
    >
      <div className="row">
        <div className="col-md-6 border-end">
          <h6>Actual</h6>
          <p><strong>Nombre:</strong> {user?.firstName}</p>
          <p><strong>Apellido:</strong> {user?.lastName}</p>
          <p><strong>DNI:</strong> {user?.documentNumber}</p>
          <p><strong>Teléfono:</strong> {user?.phone}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Dirección:</strong> {user?.address}</p>
          <p><strong>Rol:</strong> {user?.role}</p>
          <p><strong>Estado:</strong> {user?.enabled ? 'Activo' : 'Inactivo'}</p>
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

          <div className="mb-2" >
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
            <label className="form-label">Dirección</label>
            <input
              type="text"
              name="address"
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
              value={formData.address}
              onChange={handleChange}
            />
          </div>

        </div>
      </div>
    </GenericModal>
  );
};

export default EditPerfilUserModal;
