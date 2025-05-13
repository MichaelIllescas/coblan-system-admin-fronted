import React from 'react';
import GenericModal from '../../../Components/Modals/GenericModal';
import useForm from '../../../hooks/useForm'; 
import validateServiceForm from '../validations/validateServiceForm'; 

const EditServiceModal = ({ show, onClose, service, onConfirm }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      name: service?.name || '',
      monthlyHours: service?.monthlyHours || '',
      totalAmount: service?.totalAmount || '',
      note: service?.note || '',
    },
    validateServiceForm 
  );

  // reset form when modal closes
  React.useEffect(() => {
    if (service) {
      resetForm();
    }
  }, [service]);

  return (
    <GenericModal
      show={show}
      onHide={onClose}
      title="Editar Servicio"
      onConfirm={handleSubmit((data) => {
        onConfirm({ ...service, ...data });
        onClose();
      })}
      confirmText="Guardar"
    >
      <div className="row">
        {/* Lado izquierdo: datos actuales */}
        <div className="col-md-6 border-end">
          <h6>Actual</h6>
          <p><strong>Nombre:</strong> {service?.name}</p>
          <p><strong>Cantidad de Horas:</strong> {service?.monthlyHours}</p>
          <p><strong>Valor:</strong> {service?.totalAmount}</p>
          <p><strong>Notas:</strong> {service?.note}</p>
       
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
            <label className="form-label">Total de Horas:</label>
            <input
              type="number"
              name="monthlyHours"
              className={`form-control ${errors.monthlyHours ? 'is-invalid' : ''}`}
              value={formData.monthlyHours}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Valor:</label>
            <input
              type="number"
              name="totalAmount"
              className={`form-control ${errors.totalAmount ? 'is-invalid' : ''}`}
              value={formData.totalAmount}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Notas</label>
            <input
              type="text"
              name="note"
              className={`form-control ${errors.note ? 'is-invalid' : ''}`}
              value={formData.note}
              onChange={handleChange}
            />
          </div>
         
          
        </div>
      </div>
    </GenericModal>
  );
};

export default EditServiceModal;
