import React from 'react'

export default function validateCustomerForm(values) {
    const errors = {};

    if (!values.firstName.trim()) {
        errors.firstName = 'El nombre es obligatorio.';
    }

    if (!values.lastName.trim()) {
        errors.lastName = 'El apellido es obligatorio.';
    }

    if (!values.documentNumber.trim()) {
        errors.documentNumber = 'El número de documento es obligatorio.';
    } else if (!/^\d+$/.test(values.documentNumber)) {
        errors.documentNumber = 'El número de documento debe contener solo números.';
    }

    if (!values.email.trim()) {
        errors.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'El correo electrónico no es válido.';
    }

    if (!values.phone.trim()) {
        errors.phone = 'El teléfono es obligatorio.';
    } else if (!/^\d{6,15}$/.test(values.phone)) {
        errors.phone = 'El teléfono debe contener entre 6 y 15 dígitos.';
    }

    if (!values.cuit.trim()) {
        errors.cuit = 'El CUIT es obligatorio.';
    } else if (!/^\d{11}$/.test(values.cuit)) {
        errors.cuit = 'El CUIT debe tener exactamente 11 números.';
    }

    if (!values.address.trim()) {
        errors.address = 'La dirección es obligatoria.';
    }

    return errors;

}
