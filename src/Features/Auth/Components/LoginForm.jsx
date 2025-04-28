import React from "react";
import '../Styles/login.css'
import logo from '../../../assets/logo.jpeg'; // ajustá la ruta según dónde estés

const LoginForm = ({register, handleSubmit, errors, errorMessage}) => {
  

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="img-fluid logo-img"

                />
              </div>

              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    {...register('email')}
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    {...register('password')}
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                {/* Remember me */}
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Mantener Sesion Iniciada
                  </label>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
                   {/* Mensaje de error general */}
              {errorMessage && (
                <div className="form-error-message mt-3 text-center">
                  {errorMessage}
                </div>
              )}
              <div className="mt-3 text-center">
                <a className="enlace"href="#">¿No recordás tu contraseña? Hacé clic aquí</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
  