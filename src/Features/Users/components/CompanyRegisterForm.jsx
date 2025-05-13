import React from "react";
import useCompanyRegister from "../hooks/useCompanyRegister";

const CompanyRegisterForm = ({onSuccess}) => {
  const {
    formData,
    errors,
    loading,
    handleChange,
    handleSubmit,
  } = useCompanyRegister(onSuccess);

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div className="mb-3">
        <label>Razón Social</label>
        <input name="businessName" value={formData.businessName} onChange={handleChange} className="form-control" />
        {errors.businessName && <small className="text-danger">{errors.businessName}</small>}
      </div>

      <div className="mb-3">
        <label>CUIT</label>
        <input name="cuit" value={formData.cuit} onChange={handleChange} className="form-control" />
        {errors.cuit && <small className="text-danger">{errors.cuit}</small>}
      </div>

      <div className="mb-3">
        <label>Condición frente al IVA</label>
        <select name="ivaCondition" value={formData.ivaCondition} onChange={handleChange} className="form-control">
          <option value="">Seleccionar</option>
          <option value="RESPONSABLE_INSCRIPTO">Responsable Inscripto</option>
          <option value="MONOTRIBUTISTA">Monotributista</option>
          <option value="EXENTO">Exento</option>
          <option value="NO_RESPONSABLE">No Responsable</option>
          <option value="RESPONSABLE_NO_INSCRIPTO">Responsable No Inscripto</option>
        </select>
        {errors.ivaCondition && <small className="text-danger">{errors.ivaCondition}</small>}
      </div>

      <div className="mb-3">
        <label>Domicilio Fiscal</label>
        <input name="fiscalAddress" value={formData.fiscalAddress} onChange={handleChange} className="form-control" />
        {errors.fiscalAddress && <small className="text-danger">{errors.fiscalAddress}</small>}
      </div>

      <div className="mb-3">
        <label>Nombre de Fantasía (opcional)</label>
        <input name="tradeName" value={formData.tradeName} onChange={handleChange} className="form-control" />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} className="form-control" />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>

      <div className="mb-3">
        <label>Teléfono</label>
        <input name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}
      </div>

       <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Registrando..." : "Registrar Empresa"}
      </button>
    </form>
  );
};

export default CompanyRegisterForm;
