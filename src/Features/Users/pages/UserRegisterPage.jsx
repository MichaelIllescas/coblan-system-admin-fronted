import UserRegisterForm from '../components/UserRegisterForm';
import {useRegisterUser} from '../hooks/useUserRegister';
import FullScreenLoader from '../../../Components/Loading/FullScreenLoader'

const UserRegisterPage = () => {
    const { handleRegisterUser, errorMessage, successMessage , loading} = useRegisterUser();

    return (
        <div className="container mt-4">
            {loading && <FullScreenLoader/>}
            <h2 className="text-center mb-4 text-white">Registrar Nuevo Usuario</h2>
            <UserRegisterForm  sterForm onSubmit={handleRegisterUser} />
            
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

export default UserRegisterPage;
