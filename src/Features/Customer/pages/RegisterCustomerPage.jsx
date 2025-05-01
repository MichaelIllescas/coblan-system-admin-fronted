import React from "react";
import CustomerRegisterForm from "../components/CustomerRegisterForm";
import { useCustomerRegistration } from "../hooks/useCustomerRegistration";

const RegisterCustomerPage = () => {
  const { handleRegisterCustomer } =
    useCustomerRegistration();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-white">Registrar Cliente</h2>
     

      <CustomerRegisterForm
        onSubmit={(data, resetForm) => handleRegisterCustomer(data, resetForm)}
      />
     
    </div>
  );
};

export default RegisterCustomerPage;
