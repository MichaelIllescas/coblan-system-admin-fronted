import useResetPasswordForm from "../Hooks/useResetPasswordForm";
import usePasswordVisibility from "../Hooks/usePasswordVisibility";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const {
    formData, errors, message, success, handleChange, handleSubmit
  } = useResetPasswordForm();

  const {
    showPassword, togglePassword, showConfirm, toggleConfirm
  } = usePasswordVisibility();

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h4 className="mb-3">Restablecer contraseña</h4>

        {message && (
          <div className={`alert ${success ? "alert-success" : "alert-danger"}`}>
            {message}
          </div>
        )}

        {!success && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Nueva contraseña</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePassword}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label>Confirmar contraseña</label>
              <div className="input-group">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={toggleConfirm}
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Guardar nueva contraseña
            </button>
          </form>
        )}

        {success && (
          <button onClick={() => navigate("/login")} className="btn btn-secondary mt-3 w-100">
            Ir al inicio de sesión
          </button>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
