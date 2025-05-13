// src/validation/validateCompanyForm.js
export default function validateCompanyForm(values) {
  const errors = {};

  if (!values.businessName) errors.businessName = "La razón social es obligatoria";
  if (!values.cuit || !/^\d{11}$/.test(values.cuit)) errors.cuit = "El CUIT debe tener 11 dígitos";
  if (!values.ivaCondition) errors.ivaCondition = "La condición frente al IVA es obligatoria";
  if (!values.fiscalAddress) errors.fiscalAddress = "El domicilio fiscal es obligatorio";
  if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) errors.email = "El email es inválido";
  if (!values.phone || !/^\d{10,15}$/.test(values.phone)) errors.phone = "El teléfono debe tener entre 10 y 15 dígitos";

  return errors;
}
