// features/hiring/validation/validateHiringForm.js

export default function validateHiringForm({ startDate, employee, service, customer, schedule }) {
    const errors = {};
  
    if (!startDate) {
      errors.startDate = 'Debe seleccionar una fecha de inicio.';
    }
  
    if (!employee) {
      errors.employee = 'Debe seleccionar un empleado.';
    }
  
    if (!service) {
      errors.service = 'Debe seleccionar un servicio.';
    }
  
    if (!customer) {
      errors.customer = 'Debe seleccionar un cliente.';
    }
  
    if (!schedule || schedule.length === 0) {
      errors.schedule = 'Debe seleccionar al menos un horario.';
    }
  
    return errors;
  }
  