import React, { useEffect, useState } from "react";
import UserProfileCard from "../components/UserProfileCard";
import CompanyProfileCard from "../components/CompanyProfileCard";
import { useAuth, checkSession } from "../../../../src/Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSyncAlt } from 'react-icons/fa';
import PerfilEmpresaTab from "../components/PerfilEmpresaTab";
import useCompany from "../hooks/useCompany";


const ConfigurationPerfilPage = () => {
  const [activeTab, setActiveTab] = useState("usuario");
  const { user, setUser } = useAuth();
  const {  company, refresh } = useCompany();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRefreshData = () => {
    checkSession({ setUser, setSessionExpired: () => {}, navigate, location });
    refresh();
  };
  useEffect(() => {
    checkSession({ setUser, setSessionExpired: () => {}, navigate, location });
     refresh();
  }, []);

  return (
      <div className="container mt-4 mb-2">
  <div className="d-flex justify-content-between align-items-center">
    <ul className="nav nav-tabs mb-0">
      <li className="nav-item">
        <button
          className={`nav-link ${activeTab === "usuario" ? "active" : ""}`}
          onClick={() => setActiveTab("usuario")}
        >
          Datos del Usuario
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link ${activeTab === "empresa" ? "active" : ""}`}
          onClick={() => setActiveTab("empresa")}
        >
          Datos de la Empresa
        </button>
      </li>
    </ul>

    <button className="btn btn-action" onClick={handleRefreshData}>
      <FaSyncAlt className="me-1" /> 
    </button>
  </div>

  <div className="mt-4">
    {activeTab === "usuario" && (
      <>
        {!user && <p>Cargando usuario...</p>}
        {user && <UserProfileCard user={user} />}
      </>
    )}

{activeTab === "empresa" && (
      <>
        {!company && <p>Cargando empresa...</p>}
        {company && <PerfilEmpresaTab company={company} />}
      </>
    )}


  </div>
</div>

  );
};

export default ConfigurationPerfilPage;
