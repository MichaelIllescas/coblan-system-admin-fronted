import { Route, Routes } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import LoginPage from "../Features/Auth/Pages/LoginPage";
import { ProtectedRoute } from "../Routes/ProtectedRoute";
import DashboardPage from '../../src/Features/Dashboard/pages/DashboardPage';
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
      {/* Públicas */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protegidas */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/configuration"
        element={
          <ProtectedRoute>
            <ConfigurationPerfilPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />

      {/* Customers */}
      <Route
        path="/customerRegister"
        element={
          <ProtectedRoute>
            <RegisterCustomerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customersList"
        element={
          <ProtectedRoute>
            <ListCustomersPage />
          </ProtectedRoute>
        }
      />

      {/* Employees */}
      <Route
        path="/employeeRegister"
        element={
          <ProtectedRoute>
            <EmployeeRegistrationPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employeesList"
        element={
          <ProtectedRoute>
            <ListEmployeesPage />
          </ProtectedRoute>
        }
      />

      {/* Expenses */}
      <Route
        path="/expenses/create"
        element={
          <ProtectedRoute>
            <ExpenseRegisterPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/expensesList"
        element={
          <ProtectedRoute>
            <ListExpensesPage />
          </ProtectedRoute>
        }
      />

      {/* Services */}
      <Route
        path="/services/create"
        element={
          <ProtectedRoute>
            <ServiceRegisterPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/servicesList"
        element={
          <ProtectedRoute>
            <ListServicesPage />
          </ProtectedRoute>
        }
      />

      {/* Salarys */}
      <Route
        path="/salary/register"
        element={
          <ProtectedRoute>
            <RegisterSalaryPaymentPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/salary/list"
        element={
          <ProtectedRoute>
            <ListSalaryPage />
          </ProtectedRoute>
        }
      />

      {/* Hirings */}
      <Route
        path="/hiring/register"
        element={
          <ProtectedRoute>
            <HiringRegisterPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hiring/list"
        element={
          <ProtectedRoute>
            <ListHiringsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hiring/listMonthly"
        element={
          <ProtectedRoute>
            <ListHiringsMontly />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hirings/:hiringId/hours"
        element={
          <ProtectedRoute>
            <WorkHoursPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hiring/pending-hours"
        element={
          <ProtectedRoute>
            <PendingWorkHoursPage />
          </ProtectedRoute>
        }
      />

      {/* Reports */}
      <Route
        path="/reports/employees-hours"
        element={
          <ProtectedRoute>
            <AssignedHoursPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports/monthly"
        element={
          <ProtectedRoute>
            <MonthlyReportPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports/anual"
        element={
          <ProtectedRoute>
            <AnnualReportPage />
          </ProtectedRoute>
        }
      />

      {/* Solo ADMIN */}
      {role === "ADMIN" && (
        <>
          <Route
            path="/users/create"
            element={
              <ProtectedRoute>
                <UserRegisterPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usersList"
            element={
              <ProtectedRoute>
                <ListUsersPage />
              </ProtectedRoute>
            }
          />
        </>
      )}

      {/* Catch all */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
