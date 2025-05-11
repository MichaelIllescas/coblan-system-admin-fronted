import React, { useState, useEffect } from "react";
import useCompany from "../hooks/useCompany";
import CompanyRegisterForm from "../components/CompanyRegisterForm";
import CompanyDetails from "../components/CompanyDetails";

const PerfilEmpresaTab = ({company}) => {
  const {loading, notFound, refresh } = useCompany();
  const [companyCreated, setCompanyCreated] = useState(false);

  useEffect(() => {
    if (companyCreated) {
      refresh();
      setCompanyCreated(false); // reseteamos bandera
    }
  }, [companyCreated]);

  {loading && <FullScreenLoader/> }
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
