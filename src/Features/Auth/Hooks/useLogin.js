import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../Service/authService';
import { useAuth } from '../../../Context/AuthContext';

export const useLogin = () => {

    const { loginUser } = useAuth(); 


    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (email, password) => {
        try {
            
            await loginUser(email, password);
            navigate('/dashboard');
        } catch (error) {
            const message = error.response?.data?.message || 'Error al iniciar sesión';
            setErrorMessage(message);
        }
    };

    return { handleLogin, errorMessage };
};
