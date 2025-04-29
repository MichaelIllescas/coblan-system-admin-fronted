import { useState } from 'react';

/**
 * Hook personalizado para manejar formularios.
 * @param {Object} initialValues Valores iniciales del formulario
 * @param {Function} validateOnSubmit Función de validación que recibe los valores
 */
function useForm(initialValues, validateOnSubmit) {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        const validationErrors = validateOnSubmit(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        callback(formData);
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
    };
}

export default useForm;
