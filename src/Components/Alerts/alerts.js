import Swal from 'sweetalert2';

/**
 * Muestra una alerta de éxito con SweetAlert2
 * @param {string} title - Título del mensaje
 * @param {string} text - Contenido del mensaje
 */
export const showSuccessAlert = (title, text) => {
  Swal.fire({
    icon: 'success',
    title,
    text,
    confirmButtonColor: '#3085d6',
  });
};

/**
 * Muestra una alerta de error con SweetAlert2
 * @param {string} title - Título del error
 * @param {string} text - Mensaje del error
 */
export const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonColor: '#d33',
  });
};
