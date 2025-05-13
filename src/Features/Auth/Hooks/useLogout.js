import { useNavigate } from 'react-router-dom';
import { logout } from '../Service/authService';
import { useState } from 'react';

export const useLogout = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await logout();
        } catch (error) {
            console.error('Error cerrando sesión', error);
            // Igualmente seguimos
        } finally {
            navigate('/login'); // 👉 Siempre navegar al login aunque falle
            setIsLoading(false);
        }
    };

    return { handleLogout, isLoading };
};
