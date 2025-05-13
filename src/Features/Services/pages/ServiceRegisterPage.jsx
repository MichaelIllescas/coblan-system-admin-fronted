import ServiceRegisterForm  from '../components/ServiceRegisterForm';
import {useRegisterService} from '../hooks/useServiceRegister';
import FullScreenLoader from '../../../Components/Loading/FullScreenLoader'


const ServiceRegisterPage = () => {
    const { handleRegisterService, errorMessage, successMessage, loading } = useRegisterService();

    return (
        <div className="container mt-4">
             {loading && <FullScreenLoader />}
            <h2 className="text-center mb-4 text-white">Registrar Nuevo Servicio</h2>
            <ServiceRegisterForm  sterForm onSubmit={handleRegisterService} />
            
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

export default ServiceRegisterPage;
