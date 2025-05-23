import React from 'react';
import {useEmplooyeRegistration} from '../hook/useEmployeeRegister';
import EmployeeRegisterForm from '../components/EmployeeRegisterForm';
import FullScreenLoader from '../../../Components/Loading/FullScreenLoader';

const EmployeeRegistrationPage = () => {
    const { handleRegisterEmployee, errorMessage, successMessage , loading} = useEmplooyeRegistration();
    {loading && <FullScreenLoader/> }
   
    return ( 

        

        <div className="container mt-4">
             {loading && <FullScreenLoader />}
            <h2 className="text-center mb-4 text-white">Registrar Empleado</h2>
            <EmployeeRegisterForm onSubmit={handleRegisterEmployee} />
            
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

export default EmployeeRegistrationPage;
