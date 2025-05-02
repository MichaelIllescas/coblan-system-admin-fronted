import { Route, Routes } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import LoginPage from "../Features/Auth/Pages/LoginPage";
import {ProtectedRoute} from '../Routes/ProtectedRoute'
import DashboardPage from "../Features/Dashboard/pages/DashboardPage";
import RegisterCustomerPage from "../Features/Customer/pages/RegisterCustomerPage";
import EmployeeRegistrationPage from "../Features/Employee/pages/EmployeeRegistrationPage";
import ExpenseRegisterPage from "../Features/Expenses/pages/ExpenseRegisterPage";
import ServiceRegisterPage from "../Features/Services/pages/ServiceRegisterPage";
import UserRegisterPage from "../Features/Users/pages/UserRegisterPage";
import ListCustomersPage from "../Features/Customer/pages/ListCustomersPage";
import ListEmployeesPage from "../Features/Employee/pages/ListEmployeesPage";
import ListExpensesPage from "../Features/Expenses/pages/ListExpensesPage";
import ListServicesPage from "../Features/Services/pages/ListServicesPage";
import ListUsersPage from "../Features/Users/pages/ListUsersPage";
import RegisterSalaryPaymentPage from "../Features/SalaryPayments/pages/RegisterSalaryPaymentPage";
import ListSalaryPage from '../Features/SalaryPayments/pages/ListSalarysPage';
import HiringRegisterPage from "../Features/Hirings/pages/HiringRegisterPage";
import ListHiringsPage from "../Features/Hirings/pages/ListHiringPage";
import ListHiringsMontly from "../Features/Hirings/pages/ListHiringsMontly";
import WorkHoursPage from "../Features/Hirings/pages/WorkHoursPage";

export const AppRoutes = () => {
  const { user } = useAuth();
  const role = user?.roles?.[0]?.authority;
  return (
    <Routes>
      {/* Ruta pública para el login */}
      <Route path="/login" element={<LoginPage />} />
      {/* Ruta pública para landing page */}
      <Route path="/" element={<LoginPage />} />

      
      {/* Rutas protegidas dentro de MainLayout */}
      <Route path="/customerRegister" element={<ProtectedRoute element={<RegisterCustomerPage />} />} /> 
      <Route path="/customersList" element={<ProtectedRoute element={<ListCustomersPage />} />} /> 

      <Route path="/employeeRegister" element={<ProtectedRoute element={<EmployeeRegistrationPage />} />} /> 
      <Route path="/employeesList" element={<ProtectedRoute element={<ListEmployeesPage />} />} /> 

      <Route path="/expenses/create" element={<ProtectedRoute element={<ExpenseRegisterPage />} />} /> 
      <Route path="/expensesList" element={<ProtectedRoute element={<ListExpensesPage />} />} /> 

      <Route path="/services/create" element={<ProtectedRoute element={<ServiceRegisterPage />} />} /> 
      <Route path="/servicesList" element={<ProtectedRoute element={<ListServicesPage />} />} /> 

      <Route path="/users/create" element={<ProtectedRoute element={<UserRegisterPage />} />} /> 
      <Route path="/usersList" element={<ProtectedRoute element={<ListUsersPage />} />} /> 

      <Route path="/salary/register" element={<ProtectedRoute element={<RegisterSalaryPaymentPage />} />} /> 
      <Route path="/salary/list" element={<ProtectedRoute element={<ListSalaryPage />} />} /> 

      <Route path="/hiring/register" element={<ProtectedRoute element={<HiringRegisterPage />} />} /> 
      <Route path="/hiring/list" element={<ProtectedRoute element={<ListHiringsPage />} />} /> 
      <Route path="/hiring/listMonthly" element={<ProtectedRoute element={<ListHiringsMontly />} />} /> 

      <Route path="/hirings/:hiringId/hours" element={<ProtectedRoute element={<WorkHoursPage />} />} />


      {/* users managenent */}

   {role === "ADMIN" && (
  <>
    {/* <Route path="/userList" element={<ProtectedRoute element={<UsersPage />} />} />
    <Route path="/userRegister" element={<ProtectedRoute element={<RegisterForm />} />} /> */}
  </>
)}


<Route path="/dashboard" element={<ProtectedRoute element={<DashboardPage/>} />} />

{/*         
         */}



      {/* Redirigir cualquier ruta desconocida a "/login" */}
      <Route path="*" element={<LoginPage />} />
      
    </Routes>
  );
};
