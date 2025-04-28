import React from "react";
import { Navigate, Outlet } from "react-router-dom";


// validar si el usuario esta loguiado
const PrivateRoutes=() =>{
  const user = JSON.parse(localStorage.getItem("user")); // recupero usuario
  
  return user ? <Outlet /> : <Navigate to="/login" replace/>;

};

export default PrivateRoutes;