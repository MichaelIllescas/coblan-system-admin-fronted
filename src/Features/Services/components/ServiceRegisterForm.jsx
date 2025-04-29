import useForm from '../../../hooks/useForm';
import validateServiceForm from '../validations/validateServiceForm';

const ServiceRegisterForm = ({ onSubmit }) => {
    const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(
        {
            name: '',
            monthlyHours: '',
            totalAmount: '',
            note: ''
        },
        validateServiceForm
    );

    return (
        <div className="card shadow-lg border-0 p-4 col-lg-6 col-md-8 col-sm-10 m-auto">
            <form onSubmit={handleSubmit((formData) => onSubmit(formData, resetForm))} noValidate>

                {/* Nombre del servicio */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre del servicio</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* Horas mensuales */}
                <div className="mb-3">
                    <label htmlFor="monthlyHours" className="form-label">Horas mensuales</label>
                    <input
                        type="number"
                        id="monthlyHours"
                        name="monthlyHours"
                        className={`form-control ${errors.monthlyHours ? 'is-invalid' : ''}`}
                        value={formData.monthlyHours}
                        onChange={handleChange}
                        required
                    />
                    {errors.monthlyHours && <div className="invalid-feedback">{errors.monthlyHours}</div>}
                </div>

                {/* Importe total */}
                <div className="mb-3">
                    <label htmlFor="totalAmount" className="form-label">Monto total</label>
                    <input
                        type="number"
                        step="0.01"
                        id="totalAmount"
                        name="totalAmount"
                        className={`form-control ${errors.totalAmount ? 'is-invalid' : ''}`}
                        value={formData.totalAmount}
                        onChange={handleChange}
                        required
                    />
                    {errors.totalAmount && <div className="invalid-feedback">{errors.totalAmount}</div>}
                </div>

                {/* Nota */}
                <div className="mb-3">
                    <label htmlFor="note" className="form-label">Nota</label>
                    <textarea
                        id="note"
                        name="note"
                        className={`form-control ${errors.note ? 'is-invalid' : ''}`}
                        value={formData.note}
                        onChange={handleChange}
                        rows={3}
                    />
                    {errors.note && <div className="invalid-feedback">{errors.note}</div>}
                </div>

                {/* Botón */}
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Registrar servicio
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServiceRegisterForm;
