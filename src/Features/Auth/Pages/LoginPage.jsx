import LoginForm from '../components/LoginForm';
import { useLogin } from '../hooks/useLogin';

const LoginPage = () => {
    const { handleLogin, errorMessage } = useLogin();
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                   
                <LoginForm
                        onSubmit={(formData) => handleLogin(formData.email, formData.password)} 
                        errorMessage={errorMessage}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
