import { useNavigate } from 'react-router-dom';
import apiClient from '../../../Services/apiClient'; // Asegúrate de que la ruta sea correcta
import { useState } from 'react';
export const useLogin=()=>{
const navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState('');
const handleLogin = async (email, password) =>{
    try {
        const response = await apiClient.post('/auth/login', {
            email,
            password,
        });

    const user=response.data;
    localStorage.setItem('user', JSON.stringify(user));

    // redireccion al dashbaard 
    navigate('/');
    } catch (error) {
        const message = error.response?.data?.message || 'Login faliido';
      setErrorMessage(message);
    }
};
 return {handleLogin, errorMessage};
};

