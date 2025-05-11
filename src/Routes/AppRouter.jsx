import { Route, Routes } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import LoginPage from "../Features/Auth/Pages/LoginPage";
import { ProtectedRoute } from "../Routes/ProtectedRoute";
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
import ListSalaryPage from "../Features/SalaryPayments/pages/ListSalarysPage";
import HiringRegisterPage from "../Features/Hirings/pages/HiringRegisterPage";
import ListHiringsPage from "../Features/Hirings/pages/ListHiringPage";
import ListHiringsMontly from "../Features/Hirings/pages/ListHiringsMontly";
import WorkHoursPage from "../Features/Hirings/pages/WorkHoursPage";
import PendingWorkHoursPage from "../Features/Hirings/pages/PendingWorkHoursPage";
import AssignedHoursPage from "../Features/Reports/pages/AssignedHoursPage";
import MonthlyReportPage from "../Features/Reports/pages/MonthlyReportPage";
import AnnualReportPage from "../Features/Reports/pages/AnnualReportPage";
import ChangePassword from "../Features/Users/components/ChangePassword";
import ConfigurationPerfilPage from "../Features/Users/pages/ConfigurationPerfilPage";
import ForgotPassword from "../Features/Auth/Pages/ForgotPassword";
import ResetPassword from '../Features/Auth/Pages/ResetPassword';
export const AppRoutes = () => {
  const { user } = useAuth();
  const role = user?.role;
  return (
    <Routes>
      {/* Ruta pública para el login */}
      <Route path="/login" element={<LoginPage />} />
      {/* Ruta pública para landing page */}
      <Route path="/" element={<LoginPage />} />

      {/* Rutas protegidas dentro de MainLayout */}

      {/* customers */}
      <Route
        path="/customerRegister"
        element={<ProtectedRoute element={<RegisterCustomerPage />} />}
      />
      <Route
        path="/customersList"
        element={<ProtectedRoute element={<ListCustomersPage />} />}
      />

      {/* emplooyes */}
      <Route
        path="/employeeRegister"
        element={<ProtectedRoute element={<EmployeeRegistrationPage />} />}
      />
      <Route
        path="/employeesList"
        element={<ProtectedRoute element={<ListEmployeesPage />} />}
      />

      {/* expenses */}
      <Route
        path="/expenses/create"
        element={<ProtectedRoute element={<ExpenseRegisterPage />} />}
      />
      <Route
        path="/expensesList"
        element={<ProtectedRoute element={<ListExpensesPage />} />}
      />

      {/* services */}
      <Route
        path="/services/create"
        element={<ProtectedRoute element={<ServiceRegisterPage />} />}
      />
      <Route
        path="/servicesList"
        element={<ProtectedRoute element={<ListServicesPage />} />}
      />

      {/* salarys */}
      <Route
        path="/salary/register"
        element={<ProtectedRoute element={<RegisterSalaryPaymentPage />} />}
      />
      <Route
        path="/salary/list"
        element={<ProtectedRoute element={<ListSalaryPage />} />}
      />

      {/* hirings */}
      <Route
        path="/hiring/register"
        element={<ProtectedRoute element={<HiringRegisterPage />} />}
      />
      <Route
        path="/hiring/list"
        element={<ProtectedRoute element={<ListHiringsPage />} />}
      />
      <Route
        path="/hiring/listMonthly"
        element={<ProtectedRoute element={<ListHiringsMontly />} />}
      />
      <Route
        path="/hirings/:hiringId/hours"
        element={<ProtectedRoute element={<WorkHoursPage />} />}
      />
      <Route
        path="/hiring/pending-hours"
        element={<ProtectedRoute element={<PendingWorkHoursPage />} />}
      />

      {/* reports */}
      <Route
        path="/reports/employees-hours"
        element={<ProtectedRoute element={<AssignedHoursPage />} />}
      />
      <Route
        path="/reports/monthly"
        element={<ProtectedRoute element={<MonthlyReportPage />} />}
      />
      <Route
        path="/reports/anual"
        element={<ProtectedRoute element={<AnnualReportPage />} />}
      />

      {/* users managenent */}

      {role === "ADMIN" && (
        <>
          <Route
            path="/users/create"
            element={<ProtectedRoute element={<UserRegisterPage />} />}
          />
          <Route
            path="/usersList"
            element={<ProtectedRoute element={<ListUsersPage />} />}
          />
        </>
      )}
      <Route
        path="/change-password"
        element={<ProtectedRoute element={<ChangePassword />} />}
      />

      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<DashboardPage />} />}
      />
      <Route
        path="/configuration"
        element={<ProtectedRoute element={<ConfigurationPerfilPage />} />}
      />

      {/* Redirigir cualquier ruta desconocida a "/login" */}
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="*" element={<LoginPage />} />

    </Routes>
  );
};
