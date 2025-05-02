export default function validateSalaryPayment(values) {
    const errors = {};
  
    // Empleado obligatorio
    if (!values.employeeId || values.employeeId === '') {
      errors.employeeId = 'Debe seleccionar un empleado';
    }
  
    // Monto válido
    if (!values.amount || isNaN(values.amount)) {
      errors.amount = 'Debe ingresar un monto válido';
    } else if (Number(values.amount) <= 0) {
      errors.amount = 'El monto debe ser mayor a cero';
    }
  
    // Fecha de pago
    if (!values.paymentDate) {
      errors.paymentDate = 'Debe ingresar la fecha de pago';
    }
  
    // Periodo obligatorio (YYYY-MM)
    if (!values.period) {
      errors.period = 'Debe ingresar el período (YYYY-MM)';
    } else {
      const periodRegex = /^\d{4}-\d{2}$/;
      if (!periodRegex.test(values.period)) {
        errors.period = 'El formato del período debe ser YYYY-MM';
      }
    }
  
  
    return errors;
  }
  