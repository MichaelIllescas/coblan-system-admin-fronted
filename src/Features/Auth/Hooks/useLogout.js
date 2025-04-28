import { useNavigate } from "react-router-dom";
import FullScreenLoader from "../../../Components/Loading/FullScreenLoader";
import { useState } from "react";
import { createElement } from "react";

export const useLogout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true); // Mostrar el loader

    setTimeout(() => {
      localStorage.removeItem("user"); // Eliminar el usuario del localStorage
      navigate("/login"); // Redirigir a la página de inicio de sesión
    }, 1500);
  };

  const Loader = () => (isLoading ? createElement (FullScreenLoader) : null);

  return { handleLogout, Loader };
};
