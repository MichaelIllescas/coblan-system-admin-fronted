import React from 'react'

export default function validateCustomerForm(values) {
    const errors = {};

    if (!values.firstName.trim()) {
        errors.firstName = 'El nombre es obligatorio';
    }

    if (!values.lastName.trim()) {
        errors.lastName = 'El apellido es obligatorio';
    }

    if (!values.documentNumber.trim()) {
        errors.documentNumber = 'El DNI es obligatorio';
    } else if (!/^\d+$/.test(values.documentNumber)) {
        errors.documentNumber = 'El DNI debe contener solo números';
    }

    if (!values.phone.trim()) {
        errors.phone = 'El teléfono es obligatorio';
    }

    if (!values.email.trim()) {
        errors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'El formato del email no es válido';
    }

    return errors;
}
