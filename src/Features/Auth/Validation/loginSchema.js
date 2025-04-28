import * as yup from 'yup';

export const loginSchema= yup.object().shape({
email: yup
.string()
.email('el email no es valido')
.required('el email es obligatorio'),  

password: yup
.string()
.min(6, 'la contraseña debe tener al menos 6 caracteres')
.required('la contraseña es obligatoria'),
});