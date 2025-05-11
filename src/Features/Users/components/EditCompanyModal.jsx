import React, { useEffect } from "react";
import GenericModal from "../../../Components/Modals/GenericModal";
import useForm from "../../../hooks/useForm";
import validateCompanyForm from "../validations/validateCompanyForm";

const EditCompanyModal = ({ show, onClose, company, onConfirm }) => {
  const {
     formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      businessName: company?.businessName || '',
      cuit: company?.cuit || '',
      ivaCondition: company?.ivaCondition || '',
      fiscalAddress: company?.fiscalAddress || '',
      tradeName: company?.tradeName || '',
      email: company?.email || '',
      phone: company?.phone || '',
    },
    validateCompanyForm
  );

  useEffect(() => {
    if (company) resetForm();
  }, [company]);

  return (
       <GenericModal
      show={show}
      onHide={onClose}
      title="Editar Empresa"
      onConfirm={handleSubmit((data) => {
        onConfirm({ ...company, ...data });
        onClose();
      })}
      confirmText="Guardar"
    >
      <div className="row">
        <div className="col-md-6 border-end">
          <h6>Actual</h6>
          <p><strong>Razón Social:</strong> {company?.businessName}</p>
          <p><strong>CUIT:</strong> {company?.cuit}</p>
          <p><strong>Condición IVA:</strong> {company?.ivaCondition?.replaceAll("_", " ")}</p>
          <p><strong>Domicilio Fiscal:</strong> {company?.fiscalAddress}</p>
          <p><strong>Nombre de Fantasía:</strong> {company?.tradeName || '-'}</p>
          <p><strong>Email:</strong> {company?.email}</p>
          <p><strong>Teléfono:</strong> {company?.phone}</p>
        </div>

        <div className="col-md-6">
          <h6>Nuevo</h6>

          {/* Campos de edición */}
          <div className="mb-2">
            <label className="form-label">Razón Social</label>
            <input
              type="text"
              name="businessName"
              className={`form-control ${errors.businessName ? 'is-invalid' : ''}`}
              value={formData.businessName}
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
            <label className="form-label">Condición IVA</label>
            <select
              name="ivaCondition"
              className={`form-control ${errors.ivaCondition ? 'is-invalid' : ''}`}
              value={formData.ivaCondition}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option value="RESPONSABLE_INSCRIPTO">Responsable Inscripto</option>
              <option value="MONOTRIBUTISTA">Monotributista</option>
              <option value="EXENTO">Exento</option>
              <option value="NO_RESPONSABLE">No Responsable</option>
              <option value="RESPONSABLE_NO_INSCRIPTO">Responsable No Inscripto</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="form-label">Domicilio Fiscal</label>
            <input
              type="text"
              name="fiscalAddress"
              className={`form-control ${errors.fiscalAddress ? 'is-invalid' : ''}`}
              value={formData.fiscalAddress}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Nombre de Fantasía</label>
            <input
              type="text"
              name="tradeName"
              className="form-control"
              value={formData.tradeName}
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
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              name="phone"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </GenericModal>
  );
};

export default EditCompanyModal;



