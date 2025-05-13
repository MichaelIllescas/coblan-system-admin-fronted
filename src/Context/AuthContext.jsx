import { createContext, useContext, useEffect, useState } from "react";
import { login, getSession } from "../Features/Auth/Service/authService";
import FullScreenLoader from "../Components/Loading/FullScreenLoader";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const checkSession = async ({ setUser, setSessionExpired, navigate, location }) => {
  
  const publicPrefixes = ["","/login", "/forgotPassword", "/reset-password"];

  // Usamos startsWith con pathname para admitir tokens, etc.
  const isPublicRoute = publicPrefixes.some((prefix) =>
    location.pathname.startsWith(prefix)
  );

  try {
    const userData = await getSession();

    if (userData) {
      setUser(userData);
    } else if (!isPublicRoute) {
      setUser(null);
      setSessionExpired(true);

      setTimeout(() => {
        setSessionExpired(false);
        navigate("/login", { replace: true });
      }, 3000);
    }
  } catch {
    setUser(null);
  }
};



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    const wrappedCheckSession = async () => {
      if (!isMounted) return;
      await checkSession({ setUser, setSessionExpired, navigate, location });
      if (isMounted) setLoading(false);
    };

    wrappedCheckSession(); // Ejecutar al montar

    const interval = setInterval(wrappedCheckSession, 60000); // Cada 1 min
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [navigate, location.pathname]);

  // 🔹 Función de login manual
  const loginUser = async (email, password) => {
    const userData = await login(email, password);
    setUser(userData);
    setSessionExpired(false);
    return userData;
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginUser, setUser }}>
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

// 🔹 Hook para consumir el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
