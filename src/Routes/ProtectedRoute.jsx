import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { MainLayout } from "../Layouts/MainLayout";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return user ? <MainLayout>{children}</MainLayout> : <Navigate to="/login" replace />;
};
