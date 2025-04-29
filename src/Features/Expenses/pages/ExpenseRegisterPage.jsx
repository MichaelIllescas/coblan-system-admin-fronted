import ExpenseRegisterForm from '../components/ExpenseRegisterForm';
import {useRegisterExpense} from '../hooks/useRegisterExpense';


const ExpenseRegisterPage = () => {
    const { handleRegisterExpense, errorMessage, successMessage } = useRegisterExpense();

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-white">Registrar Nuevo Gasto</h2>
            <ExpenseRegisterForm onSubmit={handleRegisterExpense} />
            
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

export default ExpenseRegisterPage;
