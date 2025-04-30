import React from "react";
import useForm from "../../../hooks/useForm";
import validateCustomerForm from "../validation/validateCustomerForm";

const CustomerRegisterForm = ({ onSubmit }) => {
  const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(
    {
      firstName: "",
      lastName: "",
      documentNumber: "",
      phone: "",
      email: "",
      active: true,
    },
    validateCustomerForm
  );

  return (
    <div className="card shadow-lg border-0 p-4 col-lg-6 col-md-6 col-sm-8 m-auto">
      <form
        onSubmit={(e) => handleSubmit(() => onSubmit(formData, resetForm))(e)}
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="documentNumber" className="form-label">
            DNI
          </label>
          <input
            type="text"
            id="documentNumber"
            name="documentNumber"
            className={`form-control ${
              errors.documentNumber ? "is-invalid" : ""
            }`}
            value={formData.documentNumber}
            onChange={handleChange}
            required
          />
          {errors.documentNumber && (
            <div className="invalid-feedback">{errors.documentNumber}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="active"
            name="active"
            checked={formData.active}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="active">
            Cliente activo
          </label>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Registrar cliente
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerRegisterForm;
