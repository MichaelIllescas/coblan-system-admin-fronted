import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import LoginPage from "../Features/Auth/Pages/LoginPage";
import PrivateRoutes from "./PrivateRoutes";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Publica */}
        <Route path="/login" element={<LoginPage />} />
        {/* Add more routes here as needed */}
        
        {/* Rutas Privadas */}
        <Route element={<PrivateRoutes />} />
        <Route path="/" element={<DashboardLayout />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
  