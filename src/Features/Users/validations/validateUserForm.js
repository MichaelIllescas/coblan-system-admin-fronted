function validateUserForm(values) {
    const errors = {};

    if (!values.firstName.trim()) {
        errors.firstName = 'El nombre es obligatorio.';
    }

    if (!values.lastName.trim()) {
        errors.lastName = 'El apellido es obligatorio.';
    }

    if (!values.documentNumber.trim()) {
        errors.documentNumber = 'El DNI es obligatorio.';
    } else if (!/^\d+$/.test(values.documentNumber)) {
        errors.documentNumber = 'El DNI debe contener solo números.';
    }

    if (!values.phone.trim()) {
        errors.phone = 'El teléfono es obligatorio.';
    } else if (!/^\d{6,15}$/.test(values.phone)) {
        errors.phone = 'El teléfono debe contener entre 6 y 15 dígitos.';
    }

    if (!values.address.trim()) {
        errors.address = 'La dirección es obligatoria.';
    }

    if (!values.email.trim()) {
        errors.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'El correo electrónico no es válido.';
    }

    if (!values.password.trim()) {
        errors.password = 'La contraseña es obligatoria.';
    } else if (values.password.length < 6) {
        errors.password = 'Debe tener al menos 6 caracteres.';
    }

    if (!values.repeatPassword.trim()) {
        errors.repeatPassword = 'Debe repetir la contraseña.';
    } else if (values.password !== values.repeatPassword) {
        errors.repeatPassword = 'Las contraseñas no coinciden.';
    }
    if (!values.role.trim()) {
        errors.role = 'El rol es obligarorio.';
    } 

    return errors;
}

export default validateUserForm;
