import React from 'react';
import CustomerRegisterForm from '../components/CustomerRegisterForm';
import { useCustomerRegistration } from '../hooks/useCustomerRegistration';

const RegisterCustomerPage = () => {
    const { handleRegisterCustomer, errorMessage, successMessage } = useCustomerRegistration();

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-white">Registrar Cliente</h2>
            <CustomerRegisterForm onSubmit={handleRegisterCustomer} />
            
            <div className='col-lg-6 col-md-6 col-sm-8 m-auto' >

            {successMessage && (
                <div className="alert alert-success mt-3 text-center">
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="alert alert-danger mt-3 text-center">
                    {errorMessage}
                </div>
            )}
            </div>
        </div>
    );
};

export default RegisterCustomerPage;
