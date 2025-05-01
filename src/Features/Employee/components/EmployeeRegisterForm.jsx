import useForm from '../../../hooks/useForm';
import validateEmployeeForm from '../validations/validateEmployeeForm';

const EmployeeRegisterForm = ({ onSubmit }) => {
    const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(
        {
            firstName: "",
            lastName: "",
            documentNumber: "",
            email: "",
            phone: "",
            cuit: "",
            address: ""
        },
        validateEmployeeForm
    );


   


    return (
        <div className="card shadow-lg border-0 p-4 col-lg-6 col-md-8 col-sm-10 m-auto mb-3">
        <form onSubmit={handleSubmit((formData) => onSubmit(formData, resetForm))} noValidate>
    
            {/* Nombre */}
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Nombre</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
    
            {/* Apellido */}
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Apellido</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
    
            {/* Documento */}
            <div className="mb-3">
                <label htmlFor="documentNumber" className="form-label">DNI</label>
                <input
                    type="text"
                    id="documentNumber"
                    name="documentNumber"
                    className={`form-control ${errors.documentNumber ? 'is-invalid' : ''}`}
                    value={formData.documentNumber}
                    onChange={handleChange}
                    required
                />
                {errors.documentNumber && <div className="invalid-feedback">{errors.documentNumber}</div>}
            </div>
    
            {/* Teléfono */}
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
    
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
                    required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
    
            {/* CUIT */}
            <div className="mb-3">
                <label htmlFor="cuit" className="form-label">CUIT</label>
                <input
                    type="text"
                    id="cuit"
                    name="cuit"
                    className={`form-control ${errors.cuit ? 'is-invalid' : ''}`}
                    value={formData.cuit}
                    onChange={handleChange}
                    required
                />
                {errors.cuit && <div className="invalid-feedback">{errors.cuit}</div>}
            </div>
    
            {/* Dirección */}
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
    
        
    
            {/* Botón */}
            <div className="d-grid">
                <button type="submit" className="btn btn-success">
                    Registrar Empleado
                </button>
            </div>
        </form>
    </div>
    
    );
}

export default EmployeeRegisterForm
