import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../Service/authService';

export const useLogin = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (email, password) => {
        try {
            const user = await login(email, password);
            navigate('/dashboard');
        } catch (error) {
            const message = error.response?.data?.message || 'Error al iniciar sesión';
            setErrorMessage(message);
        }
    };

    return { handleLogin, errorMessage };
};
