import { Route, Routes } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import LoginPage from "../Features/Auth/Pages/LoginPage";
import {ProtectedRoute} from '../Routes/ProtectedRoute'
import DashboardPage from "../Features/Dashboard/pages/DashboardPage";


export const AppRoutes = () => {
  const { user } = useAuth();
  const role = user?.roles?.[0]?.authority;
  return (
    <Routes>
      {/* Ruta pública para el login */}
      <Route path="/login" element={<LoginPage />} />
      {/* Ruta pública para landing page */}
      <Route path="/" element={<LoginPage />} />

      
      {/* Rutas protegidas dentro de MainLayout



      */}


      {/* users managenent */}

   {role === "ADMIN" && (
  <>
    {/* <Route path="/userList" element={<ProtectedRoute element={<UsersPage />} />} />
    <Route path="/userRegister" element={<ProtectedRoute element={<RegisterForm />} />} /> */}
  </>
)}


<Route path="/dashboard" element={<ProtectedRoute element={<DashboardPage/>} />} />

{/*         
         */}



      {/* Redirigir cualquier ruta desconocida a "/login" */}
      <Route path="*" element={<LoginPage />} />
      
    </Routes>
  );
};
