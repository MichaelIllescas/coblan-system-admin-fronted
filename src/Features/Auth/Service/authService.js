import apiClient from "../../../Services/apiClient";



// 🔹 Función para iniciar sesión
const login = async (email, password) => {
 
  const response =await apiClient.post(
    `/auth/login`,
    { email, password },
    { withCredentials: true } // Permite enviar y recibir cookies HTTP-only
  );
  return response.data; // Retorna los datos del usuario
};

// 🔹 Función para cerrar sesión
const logout = async () => {
  await apiClient.post(
    `/auth/logout`,
    {},
    { withCredentials: true }
  );
};

// 🔹 Función para verificar si hay una sesión activa
const getSession = async () => {
  try {
    const response = await apiClient.get(`/auth/me`, { withCredentials: true });
    return response.data; // Retorna la info del usuario autenticado
  } catch {
    return null; // Si no hay sesión, retorna null
  }
};

export  {
  login,
  logout,
  getSession
};
