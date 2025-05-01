import { useState } from "react";
import useForm from "../../../hooks/useForm";
import validateUserForm from "../validations/validateUserForm";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UserRegisterForm = ({ onSubmit }) => {
  const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(
    {
      firstName: "",
      lastName: "",
      documentNumber: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      repeatPassword: "",
      role: "",
    },
    validateUserForm
  );

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const onFinalSubmit = (data, reset) => {
    // eslint-disable-next-line no-unused-vars
    const { repeatPassword, ...dataToSend } = data;
    onSubmit(dataToSend, reset);
  };

  return (
    <div className="card shadow-lg border-0 p-4 col-lg-6 col-md-8 col-sm-10 m-auto mb-3">
      <form
        onSubmit={handleSubmit((formData) =>
          onFinalSubmit(formData, resetForm)
        )}
        noValidate
      >
        {/* Campos de texto */}
        {[
          { name: "firstName", label: "Nombre" },
          { name: "lastName", label: "Apellido" },
          { name: "documentNumber", label: "DNI" },
          { name: "phone", label: "Teléfono" },
          { name: "address", label: "Dirección" },
          { name: "email", label: "Email", type: "email" },
        ].map(({ name, label, type = "text" }) => (
          <div className="mb-3" key={name}>
            <label htmlFor={name} className="form-label">
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              className={`form-control ${errors[name] ? "is-invalid" : ""}`}
              value={formData[name]}
              onChange={handleChange}
              required
            />
            {errors[name] && (
              <div className="invalid-feedback">{errors[name]}</div>
            )}
          </div>
        ))}

        {/* Rol */}
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Rol:
          </label>
          <select
            name="role"
            id="role"
            className={`form-select ${errors.role ? "is-invalid" : ""}`}
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Seleccione un rol
            </option>
            <option value="ADMIN">ADMINISTRADOR</option>
            <option value="USER">USUARIO</option>
          </select>
          {errors.role && <div className="invalid-feedback">{errors.role}</div>}
        </div>

        {/* Contraseña */}
        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="input-group-text"
              onClick={togglePassword}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <div className="invalid-feedback d-block">{errors.password}</div>
            )}
          </div>
        </div>

        {/* Repetir contraseña */}
        <div className="mb-4 position-relative">
          <label htmlFor="repeatPassword" className="form-label">
            Repetir contraseña
          </label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="repeatPassword"
              name="repeatPassword"
              className={`form-control ${
                errors.repeatPassword ? "is-invalid" : ""
              }`}
              value={formData.repeatPassword}
              onChange={handleChange}
              required
            />
            <span
              className="input-group-text"
              onClick={togglePassword}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.repeatPassword && (
              <div className="invalid-feedback d-block">
                {errors.repeatPassword}
              </div>
            )}
          </div>
        </div>

        {/* Botón */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrar usuario
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegisterForm;
