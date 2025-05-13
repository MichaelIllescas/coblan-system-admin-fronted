import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useForm from "../../../hooks/useForm";
import useChangePassword from "../hooks/useChangePassword";
import validateChangePasswordForm from "../validations/validateChangePasswordForm";

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(initialValues, validateChangePasswordForm);

  const {
    changePassword,
    loading,
   
    setError,
    setSuccess,
  } = useChangePassword();

  const onSubmit = ({ currentPassword, newPassword, confirmNewPassword }) => {
    changePassword(currentPassword, newPassword, confirmNewPassword);
    resetForm();
    setError(null);
    setSuccess(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-light rounded shadow-sm col-lg-8 m-auto">
      <h4 className="mb-3">Cambiar Contraseña</h4>

      {/* Contraseña actual */}
      <div className="mb-3">
        <label className="form-label">Contraseña actual</label>
        <div className="input-group">
          <input
            type={showPassword.current ? "text" : "password"}
            className={`form-control ${errors.currentPassword ? "is-invalid" : ""}`}
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
          />
          <span
            className="input-group-text"
            onClick={() =>
              setShowPassword((prev) => ({ ...prev, current: !prev.current }))
            }
            style={{ cursor: "pointer" }}
          >
            {showPassword.current ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.currentPassword && (
          <div className="text-danger mt-1">{errors.currentPassword}</div>
        )}
      </div>

      {/* Nueva contraseña */}
      <div className="mb-3">
        <label className="form-label">Nueva contraseña</label>
        <div className="input-group">
          <input
            type={showPassword.new ? "text" : "password"}
            className={`form-control ${errors.newPassword ? "is-invalid" : ""}`}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
          <span
            className="input-group-text"
            onClick={() =>
              setShowPassword((prev) => ({ ...prev, new: !prev.new }))
            }
            style={{ cursor: "pointer" }}
          >
            {showPassword.new ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.newPassword && (
          <div className="text-danger mt-1">{errors.newPassword}</div>
        )}
      </div>

      {/* Confirmar nueva contraseña */}
      <div className="mb-3">
        <label className="form-label">Repetir nueva contraseña</label>
        <div className="input-group">
          <input
            type={showPassword.confirm ? "text" : "password"}
            className={`form-control ${errors.confirmNewPassword ? "is-invalid" : ""}`}
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
          />
          <span
            className="input-group-text"
            onClick={() =>
              setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))
            }
            style={{ cursor: "pointer" }}
          >
            {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.confirmNewPassword && (
          <div className="text-danger mt-1">{errors.confirmNewPassword}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Cambiando..." : "Cambiar contraseña"}
      </button>
    </form>
  );
};

export default ChangePassword;
