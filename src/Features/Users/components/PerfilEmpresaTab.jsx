import React, { useState, useEffect } from "react";
import useCompany from "../hooks/useCompany";
import CompanyRegisterForm from "../components/CompanyRegisterForm";
import CompanyDetails from "../components/CompanyDetails";
import FullScreenLoader from "../../../Components/Loading/FullScreenLoader";

const PerfilEmpresaTab = ({ refreshTrigger, setRefreshTrigger }) => {
  const { company, loading, notFound, refresh } = useCompany();
  const [companyCreated, setCompanyCreated] = useState(false);

  useEffect(() => {
    if (companyCreated) {
      refresh();
      setCompanyCreated(false);
    }
  }, [companyCreated]);

  useEffect(() => {
    if (refreshTrigger) {
      refresh();
      setRefreshTrigger(false);
    }
  }, [refreshTrigger, setRefreshTrigger]);

  if (loading) return <FullScreenLoader />;

  return (
    <>
      {notFound ? (
        <CompanyRegisterForm onSuccess={() => setCompanyCreated(true)} />
      ) : (
        <CompanyDetails company={company} />
      )}
    </>
  );
};

export default PerfilEmpresaTab;
