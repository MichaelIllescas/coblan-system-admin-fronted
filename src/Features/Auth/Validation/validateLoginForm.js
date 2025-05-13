import { loginSchema } from '../Validation/loginSchema';

export const validateLoginForm = (formData) => {
    try {
        loginSchema.validateSync(formData, { abortEarly: false });
        return {}; // No hay errores
    } catch (validationError) {
        const errors = {};
        validationError.inner.forEach((err) => {
            errors[err.path] = err.message;
        });
        return errors;
    }
};
