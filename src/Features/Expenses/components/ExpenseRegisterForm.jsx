import useForm from '../../../hooks/useForm';
import validateExpenseForm from '../validations/validateExpenseForm';

const ExpenseRegisterForm = ({ onSubmit }) => {
    const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(
        {
            name: '',
            description: '',
            amount: '',
            date: '',
            notes: ''
        },
        validateExpenseForm
    );

    return (
        <div className="card shadow-lg border-0 p-4 col-lg-6 col-md-8 col-sm-10 m-auto mb-3">
            <form onSubmit={handleSubmit((formData) => onSubmit(formData, resetForm))} noValidate>

                {/* Nombre */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre del gasto</label>
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

                

                {/* Importe */}
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Importe</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                    {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
                </div>

                {/* Fecha */}
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Fecha</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </div>
                {/* Descripción */}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>

                {/* Notas */}
                <div className="mb-3">
                    <label htmlFor="notes" className="form-label">Notas</label>
                    <textarea
                        id="notes"
                        name="notes"
                        className={`form-control ${errors.notes ? 'is-invalid' : ''}`}
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                    />
                    {errors.notes && <div className="invalid-feedback">{errors.notes}</div>}
                </div>

                {/* Botón */}
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Registrar gasto
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ExpenseRegisterForm;
