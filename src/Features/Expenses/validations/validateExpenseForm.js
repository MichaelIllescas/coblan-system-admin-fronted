function validateExpenseForm(values) {
    const errors = {};

    // Nombre
    if (!values.name.trim()) {
        errors.name = 'El nombre es obligatorio.';
    }

    // Descripción
    if (!values.description.trim()) {
        errors.description = 'La descripción es obligatoria.';
    }

    // Monto
    if (values.amount === '') {
        errors.amount = 'El importe es obligatorio.';
    } else if (isNaN(values.amount) || Number(values.amount) <= 0) {
        errors.amount = 'El importe debe ser un número mayor a 0.';
    }

    // Fecha
    if (!values.date) {
        errors.date = 'La fecha es obligatoria.';
    }

    // Notas (opcional, pero se puede limitar largo si querés)
    if (values.notes && values.notes.length > 200) {
        errors.notes = 'Las notas no pueden superar los 200 caracteres.';
    }

    return errors;
}

export default validateExpenseForm;
