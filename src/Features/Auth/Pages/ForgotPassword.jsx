import useForgotPassword from "../Hooks/useForgotPassword";

const ForgotPassword = () => {
  const { email, setEmail, mensaje, enviado, loading, errors, handleSubmit } =
    useForgotPassword();

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <div
          className="container mt-5 card p-4 fade-in"
          style={{ maxWidth: "500px" }}
        >
          <h3 className="mb-3">Recuperar contraseña</h3>

          {mensaje && (
            <div
              className={`alert ${enviado ? "alert-success" : "alert-info"}`}
              style={{ whiteSpace: "pre-line", fontSize: "1rem" }}
            >
              {enviado && (
                <div className="text-center mb-2">
                  <span style={{ fontSize: "3rem", color: "green" }}>✔️</span>
                </div>
              )}
              {mensaje}
            </div>
          )}

          {!enviado && (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                {errors.email && (
                  <div
                    className="text-danger mt-1"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {errors.email}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar enlace"}
              </button>
            </form>
          )}

          {enviado && (
            <button
              className="btn btn-secondary mt-3 w-100"
              onClick={() => (window.location.href = "/login")}
            >
              Ir al inicio de sesión
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
