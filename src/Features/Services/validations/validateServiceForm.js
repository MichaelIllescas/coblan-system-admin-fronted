function validateServiceForm(values) {
    const errors = {};

    // Nombre
    if (!values.name.trim()) {
        errors.name = 'El nombre del servicio es obligatorio.';
    }

    // Horas mensuales
    if (values.monthlyHours === '') {
        errors.monthlyHours = 'Las horas mensuales son obligatorias.';
    } else if (isNaN(values.monthlyHours) || Number(values.monthlyHours) <= 0) {
        errors.monthlyHours = 'Debe ingresar un número mayor a 0.';
    }

    // Monto total
    if (values.totalAmount === '') {
        errors.totalAmount = 'El monto total es obligatorio.';
    } else if (isNaN(values.totalAmount) || Number(values.totalAmount) <= 0) {
        errors.totalAmount = 'El monto debe ser mayor a 0.';
    }

    // Nota (opcional)
    if (values.note && values.note.length > 200) {
        errors.note = 'La nota no puede tener más de 200 caracteres.';
    }

    return errors;
}

export default validateServiceForm;
