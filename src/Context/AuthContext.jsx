import { createContext, useContext, useEffect, useState } from "react";
import { login, getSession } from "../Features/Auth/Service/authService";
import FullScreenLoader from "../Components/Loading/FullScreenLoader";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      try {
        const userData = await getSession();
        if (isMounted) {
          if (userData) {
            setUser(userData);
          } else if (user && location.pathname !== "/login") {
            setSessionExpired(true);

            // Espera 3 segundos mostrando el modal, luego limpia y redirige
            setTimeout(() => {
              setUser(null); // Limpia el usuario local
              setSessionExpired(false); // Cierra modal
              navigate("/login", { replace: true }); // Redirige sin repetir historial
            }, 3000);
          }
        }
      } catch {
        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkSession(); // Ejecuta al montar

    const interval = setInterval(checkSession, 60000); // Ejecuta cada minuto
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [navigate, location.pathname]); // 👈 user ya no es dependencia

  // 🔹 Función para iniciar sesión manualmente
  const loginUser = async (email, password) => {
    const userData = await login(email, password);
    setUser(userData);
    setSessionExpired(false);
    return userData;
  };


  return (
    <AuthContext.Provider value={{ user, loading, loginUser }}>
      {/* 🔹 Modal de sesión expirada */}
      <Modal show={sessionExpired} centered>
        <Modal.Body className="text-center">
          <h5>Sesión expirada</h5>
          <p>Tu sesión ha expirado. Serás redirigido al inicio de sesión.</p>
        </Modal.Body>
      </Modal>

      {children}
    </AuthContext.Provider>
  );
};

// 🔹 Hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
