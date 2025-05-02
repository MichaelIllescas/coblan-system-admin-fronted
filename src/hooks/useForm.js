import { useState } from 'react';

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

    const resetForm = () => {
        setFormData(initialValues);
        setErrors({});
    };


    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        resetForm
    };
}

export default useForm;
