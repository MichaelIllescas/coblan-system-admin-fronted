import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; //conecto
import { loginSchema } from '../Validation/loginSchema';
import { useLogin } from '../Hooks/useLogin';
import LoginForm from '../Components/LoginForm';

const LoginPage = () => {
    const {handleLogin, errorMessage} =useLogin();

    const {
        register,
        handleSubmit,
        formState: {errors}
        } = useForm({
            resolver: yupResolver(loginSchema),  //conectamos yup
        }); 

        const onSubmit = async (data) => {
            const { email, password } = data;
            await handleLogin(email, password); 
          };
        

return (
    <LoginForm
    register={register}
    handleSubmit={handleSubmit(onSubmit)} // conecta validacion + logica
    errors={errors}
    errorMessage={errorMessage} // mensaje de error
    />
);
};
export default LoginPage;
