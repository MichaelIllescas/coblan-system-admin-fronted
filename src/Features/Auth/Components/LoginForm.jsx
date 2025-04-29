import useForm from '../../../hooks/useForm';
import { validateLoginForm } from '../Validation/validateLoginForm';
import { useLogin } from '../hooks/useLogin';
import logo from '../../../assets/logo.jpeg';
import '../styles/login.css';

const LoginForm = () => {
    const { formData, errors, handleChange, handleSubmit } = useForm(
        {
            email: '',
            password: ''
        },
        validateLoginForm
    );

    const { handleLogin, errorMessage } = useLogin();

    const onSubmit = async (formData) => {
        await handleLogin(formData.email, formData.password);
    };

    return (
        <div className=" card shadow-lg border-0 p-4">
            <div className="text-center mb-4">
                <img src={logo} alt="Logo" className="img-fluid logo-img" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ingrese su email"
                        required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Ingrese su contraseña"
                        required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                {/* Botón */}
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Iniciar sesión
                    </button>
                </div>
            </form>

            {/* Error general */}
            {errorMessage && (
                <div className="alert alert-danger mt-3 text-center">
                    {errorMessage}
                </div>
            )}

            <div className="mt-3 text-center">
                <a className="enlace" href="#">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    );
};

export default LoginForm;
