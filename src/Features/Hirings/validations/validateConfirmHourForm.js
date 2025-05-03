export default function validateConfirmHourForm(form) {
    const errors = {};
  
    if (!form.newDate) {
      errors.newDate = "La fecha es obligatoria.";
    }
  
    if (!form.newHour) {
      errors.newHour = "La hora es obligatoria.";
    }
  
    if (!form.newEmployeeId) {
      errors.newEmployeeId = "Debe seleccionar un empleado.";
    }
  
    return errors;
  }
  